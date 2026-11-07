import { useEffect, useState } from 'react'

type Screen = 'S01' | 'S02' | 'S05' | 'S06' | 'S08' | 'S09' | 'S11' | 'S12' | 'S14' | 'S15' | 'S16' | 'S17' | 'S19' | 'S20' | 'S22' | 'S24' | 'S26' | 'S27' | 'S28' | 'S29' | 'S30'
type Site = 'Sede Salomia' | 'C.C. Aventura Plaza'
type AppointmentStatus = 'Confirmada' | 'Cancelada'
type Appointment = { reservation: string; site: Site; day: string; time: string; status: AppointmentStatus }
type ExtremeCase = 'Normal' | '11 Texto sin espacios' | '12 Total gigante' | '13 Caracteres especiales' | '14 Cambio de año' | '15 Semana Santa' | '16 Fotomulta de 11 días' | '17 Medianoche del último día' | '18 Datos inconsistentes' | '19 Red lenta' | '20 Falla repetida'
type AppState = {
  appointment: Appointment
  failNext: boolean
  calendarAdded: boolean
  adventureSaturdayFull: boolean
  fineAPaid: boolean
}

const extremeCases: ExtremeCase[] = [
  'Normal', '11 Texto sin espacios', '12 Total gigante', '13 Caracteres especiales',
  '14 Cambio de año', '15 Semana Santa', '16 Fotomulta de 11 días',
  '17 Medianoche del último día', '18 Datos inconsistentes', '19 Red lenta',
  '20 Falla repetida',
]

// Keeps stale React Refresh renders safe while older stress-test modules are replaced.
function displaySite(site: Site) {
  return site
}

function testData(extreme: ExtremeCase, midnightExpired = false) {
  const changeOfYear = extreme === '14 Cambio de año'
  const holyWeek = extreme === '15 Semana Santa'
  const cameraFine = extreme === '16 Fotomulta de 11 días'
  const midnight = extreme === '17 Medianoche del último día'
  const inconsistent = extreme === '18 Datos inconsistentes'
  const calendarDays = changeOfYear
    ? ['sábado 2', 'lunes 4', 'martes 5', 'miércoles 6', 'jueves 7']
    : holyWeek
      ? ['sábado 20', 'lunes 22', 'martes 23', 'miércoles 24', 'jueves 25', 'viernes 26', 'sábado 27', 'lunes 29', 'martes 30', 'miércoles 31']
      : days
  const calendarFullDays: Record<string, string> = changeOfYear ? {
    'sábado 2': 'sábado 2 de enero de 2027', 'lunes 4': 'lunes 4 de enero de 2027',
    'martes 5': 'martes 5 de enero de 2027', 'miércoles 6': 'miércoles 6 de enero de 2027',
    'jueves 7': 'jueves 7 de enero de 2027',
  } : holyWeek ? Object.fromEntries(calendarDays.map(day => [day, `${day} de marzo de 2027`])) : fullDays
  return {
    userName: extreme === '13 Caracteres especiales' ? "María José Ñúñez D'Alessandro" : 'Juan Sebastián López Vallejo',
    greetingName: extreme === '13 Caracteres especiales' ? "María José Ñúñez D'Alessandro" : 'Juan Sebastián',
    email: extreme === '11 Texto sin espacios' ? 'juansebastian.lopezvallejo.castanedaramirez@correoempresarial.com.co' : 'j•••@correo.com',
    showConfirmationEmail: extreme === '11 Texto sin espacios',
    now: changeOfYear ? 'Miércoles 30 de diciembre de 2026 · 4:00 p. m.'
      : holyWeek ? 'Viernes 19 de marzo de 2027 · 6:00 p. m.'
      : cameraFine ? 'Lunes 21 de diciembre de 2026'
      : midnight ? midnightExpired ? 'Viernes 13 de noviembre de 2026 · 12:00 a. m.' : 'Jueves 12 de noviembre de 2026 · 11:58 p. m.'
      : 'Viernes 6 de noviembre de 2026 · 7:30 p. m.',
    neighborhood: extreme === '13 Caracteres especiales' ? 'Valle del Lili – Ciudad 2000 (Etapa 3) 🏠' : 'Casa (San Fernando)',
    fineType: cameraFine ? 'Multa por cámara (fotomulta) · C29' : 'C29 · Multa en la vía',
    fineDetail: cameraFine ? 'Infracción captada el lunes 7 de diciembre de 2026 · notificada el viernes 18 de diciembre de 2026' : changeOfYear ? 'Impuesta el miércoles 30 de diciembre de 2026' : holyWeek ? 'Impuesta el viernes 19 de marzo de 2027' : '',
    deadline: changeOfYear ? 'jueves 7 de enero de 2027' : holyWeek ? 'miércoles 31 de marzo de 2027' : cameraFine ? 'miércoles 6 de enero de 2027' : 'jueves 12 de noviembre',
    daysRemaining: cameraFine ? 'Te quedan 11 días hábiles' : 'Te quedan 5 días hábiles',
    lastDay: midnight && !midnightExpired,
    expired: midnight && midnightExpired,
    fineValue: extreme === '12 Total gigante' ? '$60.776.457' : '$633.111',
    discountedValue: '$316.556',
    savings: '$251.555',
    fineNumber: '76001000000045218734',
    pendingFineCount: extreme === '12 Total gigante' ? 20 : 1,
    pendingTotal: extreme === '12 Total gigante' ? '$1.215.529.140' : '$633.111',
    days: calendarDays,
    fullDays: calendarFullDays,
    calendarChanged: changeOfYear || holyWeek,
    appointmentDay: changeOfYear ? 'lunes 4 de enero de 2027' : inconsistent ? 'lunes 2 de noviembre de 2026' : 'lunes 9 de noviembre',
    appointmentTime: '10:00 a. m.',
    inconsistent,
    delay: extreme === '19 Red lenta' ? 12000 : 800,
    repeatFailure: extreme === '20 Falla repetida',
  }
}

const initialState: AppState = {
  appointment: { reservation: 'CP-2026-089417', site: 'Sede Salomia', day: 'lunes 9 de noviembre', time: '10:00 a. m.', status: 'Confirmada' },
  failNext: false,
  calendarAdded: false,
  adventureSaturdayFull: false,
  fineAPaid: false,
}

const addresses: Record<Site, string> = {
  'Sede Salomia': 'Carrera 3 No. 56-30',
  'C.C. Aventura Plaza': 'Carrera 100 No. 15A-61, piso 2',
}

const days = ['sábado 7', 'lunes 9', 'martes 10', 'miércoles 11', 'jueves 12']
const fullDays: Record<string, string> = {
  'sábado 7': 'sábado 7 de noviembre', 'lunes 9': 'lunes 9 de noviembre',
  'martes 10': 'martes 10 de noviembre', 'miércoles 11': 'miércoles 11 de noviembre',
  'jueves 12': 'jueves 12 de noviembre',
}

const slots: Record<Site, Record<string, [string, number][]>> = {
  'Sede Salomia': {
    'sábado 7': [['9:00 a. m.', 3]],
    'lunes 9': [['7:30 a. m.', 5], ['10:00 a. m.', 2], ['2:00 p. m.', 6]],
    'martes 10': [['7:30 a. m.', 4], ['2:00 p. m.', 3]],
    'miércoles 11': [['10:00 a. m.', 5]],
    'jueves 12': [['7:30 a. m.', 1], ['2:00 p. m.', 6]],
  },
  'C.C. Aventura Plaza': {
    'sábado 7': [['9:00 a. m.', 1]],
    'lunes 9': [['10:00 a. m.', 4], ['2:00 p. m.', 0]],
    'martes 10': [['7:30 a. m.', 6]],
    'miércoles 11': [['10:00 a. m.', 2], ['2:00 p. m.', 5]],
    'jueves 12': [['10:00 a. m.', 3]],
  },
}

function Shield() { return <span className="seal">✓ Punto autorizado</span> }

function Header({ title, back, onMenu }: { title: string; back?: () => void; onMenu?: () => void }) {
  return <header>{back ? <button className="back" onClick={back}>‹ Volver</button> : <span/>}<strong>{title}</strong>
    {onMenu ? <button className="menu-button" onClick={onMenu} aria-label="Abrir configuración"><span/><span/><span/></button> : <span />}</header>
}

function Nav({ active, go }: { active: string; go: (s: Screen) => void }) {
  const items: [string, Screen][] = [['Inicio', 'S01'], ['Multas', 'S02'], ['Pagar', 'S19'], ['Citas', 'S12'], ['Más', 'S24']]
  return <nav>{items.map(([label, screen]) =>
    <button className={active === label ? 'active' : ''} onClick={() => go(screen)} key={label}>
      <span className="nav-icon">{label === 'Inicio' ? '⌂' : label === 'Multas' ? '▤' : label === 'Pagar' ? '$' : label === 'Citas' ? '□' : '•••'}</span>{label}
    </button>)}</nav>
}

function Stepper({ step }: { step: 1 | 2 | 3 }) {
  return <div className="stepper">{['Lugar', 'Horario', 'Confirmar'].map((label, i) =>
    <div className={step === i + 1 ? 'current' : ''} key={label}><b>{i + 1}</b><span>{label}</span></div>)}</div>
}

function Button({ children, onClick, kind = 'primary', disabled = false, loading = false }:
  { children: React.ReactNode; onClick?: () => void; kind?: 'primary' | 'secondary' | 'danger'; disabled?: boolean; loading?: boolean }) {
  return <button className={`action ${kind}`} onClick={onClick} disabled={disabled || loading}>
    {loading && <span className="spinner" />} {children}
  </button>
}

function FineA({ compact = false, paid = false, extreme = 'Normal' }: { compact?: boolean; paid?: boolean; extreme?: ExtremeCase }) {
  const profile = testData(extreme)
  return <div className="card fine-card"><div className="row"><strong>Multa A</strong><span className="tag">{paid ? 'Pagada' : 'Pendiente'}</span></div>
    <p>N.° {profile.fineNumber}</p><p>{profile.fineType}</p>
    {profile.fineDetail && <p>{profile.fineDetail}</p>}
    {!compact && <p>Conducir a velocidad superior a la máxima permitida</p>}
    {paid ? <p><strong>Pagada · {profile.fineValue}</strong></p> : <><p><strong>Pagas {profile.discountedValue} en vez de {profile.fineValue}</strong></p>
      <p className={`deadline ${profile.expired ? 'error' : profile.lastDay ? 'warning' : ''}`}>◷ {profile.expired ? 'El plazo del 50 % está vencido' : profile.lastDay ? 'Hoy es el último día para el descuento' : `Tienes hasta el ${profile.deadline} para el descuento`}</p>
      {!profile.expired && <p>{profile.lastDay ? 'Te queda 1 día hábil' : profile.daysRemaining}</p>}</>}
  </div>
}

function AppointmentCard({ appointment, past, onClick, extreme = 'Normal', index }: { appointment: Appointment; past?: boolean; onClick: () => void; extreme?: ExtremeCase; index?: number }) {
  return <button className="card appointment-card" onClick={onClick}>
    <div className="row"><span className="tag">{past ? index !== undefined && index % 2 ? 'Cancelada' : 'Asististe' : appointment.status}</span><span>›</span></div>
    <Shield/><strong>{past && index !== undefined && index % 2 ? 'C.C. Aventura Plaza' : past ? 'Sede Salomia' : appointment.site}</strong>
    <p>{past ? 'jueves 5 de noviembre · 7:30 a. m.' : `${appointment.day} · ${appointment.time}`}</p>
    <p>Multa N.° 76001000000045218734</p><small>{past ? 'CP-2026-088950' : appointment.reservation}</small>
  </button>
}

function SchedulePicker({ site, day, time, setSite, setDay, setTime, filters, setFilters, loading, error, current, adventureFull, extreme }:
  { site: Site; day: string; time: string; setSite: (s: Site) => void; setDay: (d: string) => void; setTime: (t: string) => void;
    filters: string[]; setFilters: (f: string[]) => void; loading: boolean; error: string; current?: Appointment; adventureFull: boolean; extreme: ExtremeCase }) {
  const profile = testData(extreme)
  const toggle = (filter: string) => setFilters(filters.includes(filter) ? filters.filter(x => x !== filter) : [...filters, filter])
  const noSaturdayAfternoon = filters.includes('Sábado') && filters.includes('Tarde')
  const baseDay = days[Math.min(profile.days.indexOf(day), days.length - 1)] || days[0]
  const isHolyDay = extreme === '15 Semana Santa' && ['lunes 22', 'jueves 25', 'viernes 26'].includes(day)
  let visible = isHolyDay ? [] : [...(slots[site][baseDay] || [])]
  if (extreme === '18 Datos inconsistentes' && site === 'C.C. Aventura Plaza' && day === 'lunes 9') {
    visible = visible.map(([slot, count]) => slot === '10:00 a. m.' ? [slot, -1] : [slot, count])
  }
  if (filters.includes('Mañana')) visible = visible.filter(([t]) => t.includes('a. m.'))
  if (filters.includes('Tarde')) visible = visible.filter(([t]) => t.includes('p. m.'))
  if (noSaturdayAfternoon) visible = []
  return <>
    <div className="site-switch">
      {(['Sede Salomia', 'C.C. Aventura Plaza'] as Site[]).map(s =>
        <button className={site === s ? 'selected' : ''} onClick={() => setSite(s)} key={s}><Shield/><strong>{s}</strong></button>)}
    </div>
    <div className="filters">{['Sábado', 'Entre semana', 'Mañana', 'Tarde'].map(f =>
      <button className={filters.includes(f) ? 'selected' : ''} onClick={() => toggle(f)} key={f}>{f}</button>)}</div>
    <p className="section-label">Cupos hasta el {profile.deadline}</p>
    <div className="days">{profile.days.map(d => {
      const parts = d.split(' ')
      const disabledDay = extreme === '15 Semana Santa' && ['lunes 22', 'jueves 25', 'viernes 26'].includes(d)
      return <button className={day === d ? 'selected' : ''} disabled={disabledDay} onClick={() => setDay(d)} key={d}>
        <span>{disabledDay ? d : parts.slice(0, -1).join(' ')}</span><strong>{disabledDay ? 'Festivo' : parts.at(-1)}</strong>
      </button>
    })}</div>
    {loading ? <div className="skeletons"><i/><i/><i/></div> :
      noSaturdayAfternoon ? <Inline title={`No hay cupos el sábado en la tarde antes del ${profile.deadline}`}
        text="Los sábados el curso es solo en la mañana." /> :
      error ? <Inline title="No pudimos cargar los horarios. Tu cita sigue igual." text={error}/> :
      <div className="times">{visible.map(([slot, count]) => {
        const isCurrent = !!current && site === current.site && profile.fullDays[day] === current.day && slot === current.time
        const justFilled = adventureFull && site === 'C.C. Aventura Plaza' && day === profile.days[0]
        const isFull = count === 0 || justFilled
        return <button className={`${time === slot ? 'selected' : ''}${justFilled ? ' error' : ''}`} disabled={isCurrent || isFull} onClick={() => setTime(slot)} key={slot}>
          <strong>{slot}</strong><span>{isCurrent ? 'Tu cita actual' : justFilled ? 'Se acaba de llenar' : isFull ? 'Sin cupos' : `${count} ${count === 1 ? 'cupo' : 'cupos'}`}</span>
        </button>
      })}</div>}
    {noSaturdayAfternoon && <div className="inline-actions"><button onClick={() => setFilters(filters.filter(f => f !== 'Tarde'))}>Quitar filtro Tarde</button>
      <button onClick={() => { setFilters(['Sábado']); setDay(profile.days[0]); setTime('9:00 a. m.') }}>Ver {profile.fullDays[profile.days[0]]}, 9:00 a. m.</button></div>}
  </>
}

function Inline({ title, text, state = 'error' }: { title: string; text: string; state?: 'error' | 'success' | 'warning' | 'loading' }) {
  const icon = state === 'success' ? '✓' : state === 'warning' ? '◷' : state === 'loading' ? '' : '!'
  return <div className={`inline-message ${state}`} role={state === 'error' ? 'alert' : 'status'}>
    <span className={`feedback-icon${state === 'loading' ? ' spinner' : ''}`} aria-hidden="true">{icon}</span>
    <div><strong>{title}</strong><p>{text}</p></div>
  </div>
}

export default function App() {
  const [screen, setScreen] = useState<Screen>('S01')
  const [data, setData] = useState(initialState)
  const [history, setHistory] = useState<Screen[]>([])
  const [loading, setLoading] = useState('')
  const [error, setError] = useState('')
  const [pastDetail, setPastDetail] = useState(false)
  const [cancelSheet, setCancelSheet] = useState(false)
  const [site, setSite] = useState<Site>('Sede Salomia')
  const [day, setDay] = useState('lunes 9')
  const [time, setTime] = useState('')
  const [filters, setFilters] = useState<string[]>([])
  const [homeMenu, setHomeMenu] = useState(false)
  const [accountOpen, setAccountOpen] = useState(false)
  const [paymentNotice, setPaymentNotice] = useState('')
  const [receiptSaved, setReceiptSaved] = useState(false)
  const [pazNotice, setPazNotice] = useState('')
  const [reportOpen, setReportOpen] = useState(false)
  const [reportSent, setReportSent] = useState(false)
  const [messageHelpOpen, setMessageHelpOpen] = useState(false)
  const [faqOpen, setFaqOpen] = useState(false)
  const [extreme, setExtreme] = useState<ExtremeCase>('Normal')
  const [midnightExpired, setMidnightExpired] = useState(false)
  const [midnightCountdownStarted, setMidnightCountdownStarted] = useState(false)
  const [failureAttempts, setFailureAttempts] = useState<Record<string, number>>({})
  const profile = testData(extreme, midnightExpired)
  const appointment = ['14 Cambio de año', '18 Datos inconsistentes'].includes(extreme)
    ? { ...data.appointment, day: profile.appointmentDay, time: profile.appointmentTime }
    : data.appointment

  useEffect(() => {
    if (extreme === '17 Medianoche del último día' && screen === 'S16' && !midnightCountdownStarted) {
      setMidnightCountdownStarted(true)
    }
  }, [extreme, screen, midnightCountdownStarted])

  useEffect(() => {
    if (extreme !== '17 Medianoche del último día' || !midnightCountdownStarted || midnightExpired) return
    const timer = window.setTimeout(() => setMidnightExpired(true), 60000)
    return () => window.clearTimeout(timer)
  }, [extreme, midnightCountdownStarted, midnightExpired])

  const go = (next: Screen) => { setHistory(h => [...h, screen]); setScreen(next); setError('') }
  const back = () => { const prev = history.at(-1) || 'S01'; setHistory(h => h.slice(0, -1)); setScreen(prev); setError('') }
  const perform = (key: string, success: () => void, failText: string) => {
    setLoading(key); setError('')
    window.setTimeout(() => {
      setLoading('')
      if (profile.repeatFailure && (failureAttempts[key] || 0) < 3) {
        setFailureAttempts(attempts => ({ ...attempts, [key]: (attempts[key] || 0) + 1 }))
        setError(failText)
        return
      }
      if (data.failNext) {
        setData(d => ({ ...d, failNext: false }))
        setError(failText)
      } else success()
    }, profile.delay)
  }
  const changeSite = (s: Site) => { setSite(s); setTime(''); perform('hours', () => {}, 'Revisa tu conexión.') }
  const changeDay = (d: string) => { setDay(d); setTime(''); perform('hours', () => {}, 'Revisa tu conexión.') }
  const startNew = () => { setSite('Sede Salomia'); setDay(profile.days[0]); setTime(''); setFilters([]); go('S05') }
  const reset = () => { setData(initialState); setExtreme('Normal'); setMidnightExpired(false); setMidnightCountdownStarted(false); setFailureAttempts({}); setPazNotice(''); setReportOpen(false); setReportSent(false); setMessageHelpOpen(false); setFaqOpen(false); setScreen('S01'); setHistory([]); setError(''); setLoading(''); setCancelSheet(false) }
  const activeAppointment = data.appointment.status === 'Confirmada'
  const activeNav = ['S12','S14','S15','S16','S17','S05','S06','S08','S09','S11'].includes(screen) ? 'Citas' : screen === 'S01' ? 'Inicio' : screen === 'S02' ? 'Multas' : ['S19','S20','S22'].includes(screen) ? 'Pagar' : 'Más'

  const continueSchedule = (target: Screen) => {
    if (site === 'C.C. Aventura Plaza' && day === profile.days[0] && time === '9:00 a. m.') {
      setData(d => ({ ...d, adventureSaturdayFull: true }))
      setError(`Ese horario se acaba de llenar. Otra persona tomó el último cupo del ${profile.fullDays[profile.days[0]]} a las 9:00 a. m.`)
      return
    }
    go(target)
  }

  let content: React.ReactNode
  if (screen === 'S01') content = <><Header title="Inicio" onMenu={() => setHomeMenu(v => !v)}/><main>
    <h1>Hola, {profile.greetingName}</h1><p className="support">{profile.now}</p>
    {extreme === '12 Total gigante' && <p><strong>Tienes 20 multas pendientes · Total: {profile.pendingTotal}</strong></p>}
    <FineA compact paid={data.fineAPaid} extreme={extreme}/><div className="card appointment-summary">
      {data.fineAPaid ? <><strong>Multa pagada</strong><p>Pago simulado por {profile.fineValue}.</p></> :
      activeAppointment ? <><strong>Cita: {appointment.day}, {appointment.time}</strong><p>{appointment.site}</p>
        <Button onClick={() => go('S14')}>Ver mi cita</Button></> :
        <><strong>No tienes una cita para esta multa</strong><Button onClick={() => { setSite('Sede Salomia'); setDay(profile.days[0]); setTime(''); go('S06') }}>Sacar cita para el curso</Button></>}
    </div>
  </main>{homeMenu && <aside className="home-menu">
    <div className="row"><strong>Configuración de la app</strong><button className="menu-close" onClick={() => setHomeMenu(false)}>Cerrar</button></div>
    <button className="menu-option" onClick={() => setAccountOpen(v => !v)}>Inicio de sesión <span>›</span></button>
    {accountOpen && <div className="account-detail"><strong>{profile.userName}</strong><p>C.C. 1.130.456.779</p>
      {extreme === '11 Texto sin espacios' && <p>{profile.email}</p>}</div>}
    <button className="menu-option" onClick={() => { setHomeMenu(false); go('S24') }}>Herramientas de prueba <span>›</span></button>
  </aside>}</>

  else if (screen === 'S12') content = <><Header title="Citas" back={back}/><main>
    <h1>Citas</h1>
    <Button disabled={activeAppointment} loading={loading === 'findFines'} onClick={() => perform('findFines', startNew, 'No pudimos cargar tus multas. Tu información está a salvo.')}>
      {loading === 'findFines' ? 'Buscando tus multas…' : 'Sacar cita para el curso'}
    </Button>
    {activeAppointment && <p className="disabled-reason">Tu multa ya tiene cita. Puedes cambiar la fecha.</p>}
    {error && loading !== 'list' && <><Inline title={error} text="Puedes intentarlo de nuevo."/>
      <button className="link" onClick={() => perform('list', () => {}, 'No pudimos cargar tus citas. Revisa tu conexión.')}>Reintentar</button></>}
    <h2>Próximas</h2>
    {loading === 'list' ? <div className="skeletons cards"><i/><i/></div> :
      error.startsWith('No pudimos cargar tus citas') ? null :
      activeAppointment ? <AppointmentCard appointment={appointment} extreme={extreme} onClick={() => { setPastDetail(false); go('S14') }}/ > :
      <p className="empty">No tienes citas próximas.</p>}
    <h2>Anteriores</h2>
    {!error.startsWith('No pudimos cargar tus citas') && <>{!activeAppointment && <AppointmentCard appointment={appointment} extreme={extreme} onClick={() => { setPastDetail(false); go('S14') }}/>}
      <AppointmentCard appointment={appointment} past extreme={extreme} onClick={() => { setPastDetail(true); go('S14') }}/></>}
  </main></>

  else if (screen === 'S14') {
    const past = pastDetail
    const appt = past ? { ...appointment, reservation: 'CP-2026-088950', day: 'jueves 5 de noviembre', time: '7:30 a. m.', status: 'Confirmada' as const } : appointment
    content = <><Header title="Detalle de la cita" back={back}/><main>
      <div className="row"><span className="tag">{past ? 'Asististe' : appt.status}</span><strong>{appt.reservation}</strong></div>
      {!past && appt.status === 'Cancelada' && <Inline state="success" title="Cancelamos tu cita y liberamos el cupo." text={`Aún tienes hasta el ${profile.deadline} para el descuento.`}/>}
      <div className="qr placeholder">Código QR<br/>160 × 160 px</div>
      <section><Shield/><h2>{appt.site}</h2><p>{addresses[appt.site]}</p></section>
      <div className="map-placeholder placeholder">Mapa de la sede<br/>343 × 193 px</div>
      <div className="card details"><p><strong>{appt.day}</strong></p><p>{appt.time} · 2 horas</p>
        <p>Qué llevar: cédula original. Llega 15 minutos antes.</p></div>
      <FineA compact extreme={extreme}/>
      {past ? <><Button disabled>Cambiar fecha</Button><p className="disabled-reason">Ya asististe a este curso</p>
        <Button disabled kind="secondary">Agregar al calendario</Button><p className="disabled-reason">Ya asististe a este curso</p>
        <Button disabled kind="secondary">Cancelar cita</Button><p className="disabled-reason">Ya asististe a este curso</p></> :
      appt.status === 'Cancelada' ? <Button onClick={startNew}>Sacar cita para el curso</Button> :
      <div className="stack">
        <Button loading={loading === 'change'} onClick={() => perform('change', () => { setSite(appt.site); setDay(profile.days[1]); setTime(''); setFilters([]); go('S15') }, 'No pudimos cargar los horarios. Tu cita sigue igual.')}>
          {loading === 'change' ? 'Cargando horarios…' : 'Cambiar fecha'}</Button>
        {error && !error.includes('calendario') && <><Inline title={error} text="Tu cita sigue confirmada."/><button className="link" onClick={() => setError('')}>Intentar de nuevo</button></>}
        <Button kind="secondary" loading={loading === 'calendar'} disabled={data.calendarAdded} onClick={() => perform('calendar', () => setData(d => ({ ...d, calendarAdded: true })), 'No tenemos permiso para usar tu calendario.')}>
          {data.calendarAdded ? '✓ Agregada a tu calendario' : loading === 'calendar' ? 'Agregando…' : 'Agregar al calendario'}</Button>
        {error.includes('calendario') && <><Inline title="No tenemos permiso para usar tu calendario." text="Permite el acceso para agregar la cita."/>
          <button className="link" onClick={() => setError('')}>Permitir</button></>}
        <Button kind="secondary" onClick={() => setCancelSheet(true)}>Cancelar cita</Button>
      </div>}
    </main>
    {cancelSheet && <div className="sheet-backdrop"><section className="sheet"><h1>¿Cancelar tu cita?</h1>
      <p>Si cancelas y no sacas otra cita antes del {profile.deadline}, pierdes el descuento: pagarías {profile.fineValue} en vez de {profile.discountedValue}.</p>
      {error && <Inline title="No pudimos cancelar tu cita. Sigue confirmada." text="Tu reserva no cambió."/>}
      <Button kind="danger" loading={loading === 'cancel'} onClick={() => perform('cancel', () => { setData(d => ({ ...d, appointment: { ...d.appointment, status: 'Cancelada' } })); setCancelSheet(false) }, 'No pudimos cancelar tu cita. Sigue confirmada.')}>
        {loading === 'cancel' ? 'Cancelando tu cita…' : 'Sí, cancelar cita'}</Button>
      <Button kind="secondary" onClick={() => { setCancelSheet(false); setError('') }}>No, mantener mi cita</Button>
    </section></div>}</>
  }

  else if (screen === 'S15') content = <><Header title="Nuevo día, hora o lugar" back={back}/><main>
    <div className="current-strip"><strong>Tu cita actual:</strong> {appointment.day}, {appointment.time} · {appointment.site}</div>
    <SchedulePicker site={site} day={day} time={time} setSite={changeSite} setDay={changeDay} setTime={setTime}
      filters={filters} setFilters={setFilters} loading={loading === 'hours'} error={error.startsWith('Ese horario') ? '' : error} current={appointment} adventureFull={data.adventureSaturdayFull} extreme={extreme}/>
    {error.startsWith('Ese horario') && <><Inline title="Ese horario se acaba de llenar." text={`Otra persona tomó el último cupo del ${profile.fullDays[profile.days[0]]} a las 9:00 a. m.`}/>
      <Button kind="secondary" onClick={() => { setSite('Sede Salomia'); setDay(profile.days[0]); setTime('9:00 a. m.'); setError('') }}>
        {profile.calendarChanged ? `Elegir Sede Salomia, ${profile.fullDays[profile.days[0]]}, 9:00 a. m.` : 'Elegir Sede Salomia, sábado 9:00 a. m.'}
      </Button></>}
    <Button disabled={!time || loading === 'hours' || (site === appointment.site && profile.fullDays[day] === appointment.day && time === appointment.time)}
      onClick={() => continueSchedule('S16')}>Continuar</Button>
    {!time && <p className="disabled-reason">Marca un horario distinto al actual.</p>}
  </main></>

  else if (screen === 'S16') content = <><Header title="Confirma el cambio" back={back}/><main>
    <h1>Confirma el cambio</h1><div className="compare"><div className="card"><h2>Antes</h2><p>{appointment.site}</p><p>{appointment.day}</p><p>{appointment.time}</p></div>
      <div className="card"><h2>Ahora</h2><p>{site}</p><p>{profile.fullDays[day]}</p><p>{time}</p></div></div>
    <div className={`notice ${profile.expired ? 'error' : 'warning'}`}><strong>◷ {profile.expired ? 'El plazo del 50 % está vencido' : 'Sigues dentro del plazo'}</strong>
      <p>{extreme === '17 Medianoche del último día' ? `${profile.now}. ${profile.expired ? 'Ya no aplica el descuento.' : `Tienes hasta el ${profile.deadline}.`}` : `Tienes hasta el ${profile.deadline}.`}</p></div>
    <p>Tu cita actual se mantiene hasta que confirmes.</p>
    {error && <Inline title="No pudimos confirmar el cambio." text={`Tu cita del ${appointment.day} sigue igual.`}/>}
    <Button loading={loading === 'confirmChange'} onClick={() => perform('confirmChange', () => {
      setData(d => ({ ...d, appointment: { ...d.appointment, site, day: profile.fullDays[day], time } })); go('S17')
    }, `No pudimos confirmar el cambio. Tu cita del ${appointment.day} sigue igual.`)}>
      {loading === 'confirmChange' ? 'Confirmando el cambio…' : 'Confirmar el cambio'}</Button>
    <Button kind="secondary" onClick={back}>Volver a elegir</Button>
  </main></>

  else if (screen === 'S17') content = <><Header title="Cambio confirmado" back={back}/><main className="success">
    <div className="success-mark">✓</div><h1>¡Cita confirmada!</h1><strong>{data.appointment.reservation}</strong>
    <div className="card"><Shield/><h2>{data.appointment.site}</h2><p>{data.appointment.day}</p><p>{data.appointment.time} · 2 horas</p></div>
    <p>Te recordamos 24 horas y 2 horas antes.</p>
    {profile.showConfirmationEmail && <p>Te enviamos la confirmación a {profile.email}</p>}
    <Button loading={loading === 'calendar'} disabled={data.calendarAdded} onClick={() => perform('calendar', () => setData(d => ({ ...d, calendarAdded: true })), 'No tenemos permiso para usar tu calendario.')}>
      {data.calendarAdded ? '✓ Agregada a tu calendario' : loading === 'calendar' ? 'Agregando…' : 'Agregar al calendario'}</Button>
    {error.includes('calendario') && <><Inline title="No tenemos permiso para usar tu calendario." text="Permite el acceso para agregar la cita."/><button className="link" onClick={() => setError('')}>Permitir</button></>}
    <Button kind="secondary" onClick={() => go('S12')}>Ver Citas</Button><Button kind="secondary" onClick={() => go('S01')}>Ir al inicio</Button>
  </main></>

  else if (screen === 'S05') content = <><Header title="Elegir la multa" back={back}/><main>
    <h1>¿Para qué multa harás el curso?</h1><button className="card selectable" onClick={() => go('S06')}><FineA compact extreme={extreme}/></button>
    {extreme === '12 Total gigante' && Array.from({ length: 19 }, (_, index) => <div className="card" key={index}>
      <strong>Multa pendiente {index + 2}</strong><p>N.° {String(76001000000045218735n + BigInt(index))}</p>
      <p>{profile.fineValue}</p>
    </div>)}
    {extreme !== '12 Total gigante' && <><div className="card disabled-card"><strong>Multa D · C02</strong><p>N.° 76001000000045001902</p>
      <p>{profile.inconsistent ? 'Pagada · Cita próxima confirmada' : 'Curso hecho el jueves 5 de noviembre'}</p></div>
      <div className="card disabled-card"><strong>Multa B · B01</strong><p>N.° 76001000000044102233</p><p>Sin descuento: el plazo terminó el martes 8 de septiembre</p></div></>}
  </main></>

  else if (screen === 'S06') content = <><Header title="Dónde hacer el curso" back={back}/><main><Stepper step={1}/>
    <h1>¿Dónde harás el curso?</h1><div className="current-strip">Cerca de: {profile.neighborhood}</div>
    {(['Sede Salomia','C.C. Aventura Plaza'] as Site[]).map((s, i) =>
      <button className="card site-card" onClick={() => { setSite(s); setDay(profile.days[0]); setTime(''); go('S08') }} key={s}>
        <Shield/><h2>{s}</h2><p>{addresses[s]}</p><p>{i === 0 ? '4,2 km' : '6,8 km'} · Próximo cupo: {profile.calendarChanged ? profile.fullDays[profile.days[0]] : profile.days[0]}, 9:00 a. m.</p>
      </button>)}
  </main></>

  else if (screen === 'S08') content = <><Header title="Días y horas con cupo" back={back}/><main><Stepper step={2}/>
    <div className="card compact-site"><Shield/><strong>{site}</strong><p>{addresses[site]}</p></div>
    <SchedulePicker site={site} day={day} time={time} setSite={changeSite} setDay={changeDay} setTime={setTime}
      filters={filters} setFilters={setFilters} loading={loading === 'hours'} error="" adventureFull={data.adventureSaturdayFull} extreme={extreme}/>
    {error && <><Inline title="Ese horario se acaba de llenar." text={`Otra persona tomó el último cupo del ${profile.fullDays[profile.days[0]]} a las 9:00 a. m.`}/>
      <Button kind="secondary" onClick={() => { setSite('Sede Salomia'); setDay(profile.days[0]); setTime('9:00 a. m.'); setError('') }}>
        {profile.calendarChanged ? `Elegir Sede Salomia, ${profile.fullDays[profile.days[0]]}, 9:00 a. m.` : 'Elegir Sede Salomia, sábado 9:00 a. m.'}
      </Button></>}
    <Button disabled={!time || loading === 'hours'} onClick={() => continueSchedule('S09')}>Continuar</Button>
  </main></>

  else if (screen === 'S09') content = <><Header title="Resumen de tu cita" back={back}/><main><Stepper step={3}/>
    <FineA compact extreme={extreme}/><div className="card details"><Shield/><h2>{site}</h2><p>{addresses[site]}</p><p><strong>{profile.fullDays[day]} · {time}</strong></p>
      <p>2 horas</p><p>Qué llevar: cédula original. Llega 15 minutos antes.</p><hr/>
      <p>Costo del curso: $65.000 · No se cobra en este paso</p><p><strong>Ahorro: {profile.savings}</strong></p></div>
    {error && <><Inline title="No pudimos confirmar tu cita" text="Hubo un problema de conexión. Tu sede, día y hora siguen guardados."/>
      <div className="inline-actions"><button onClick={() => setError('')}>Intentar de nuevo</button><button onClick={() => go('S01')}>Guardar para después</button></div></>}
    <Button loading={loading === 'confirmNew'} onClick={() => perform('confirmNew', () => {
      setData(d => ({ ...d, appointment: { reservation: 'CP-2026-089532', site, day: profile.fullDays[day], time, status: 'Confirmada' } })); go('S11')
    }, 'No pudimos confirmar tu cita')}>
      {loading === 'confirmNew' ? 'Confirmando tu cita…' : 'Confirmar cita'}</Button>
  </main></>

  else if (screen === 'S11') content = <><Header title="Cita confirmada" back={back}/><main className="success">
    <div className="success-mark">✓</div><h1>¡Cita confirmada!</h1><strong>CP-2026-089532</strong>
    <div className="card"><Shield/><h2>{data.appointment.site}</h2><p>{data.appointment.day}</p><p>{data.appointment.time} · 2 horas</p></div>
    <p>Te recordamos 24 horas y 2 horas antes. Lleva tu cédula original.</p>
    {profile.showConfirmationEmail && <p>Te enviamos la confirmación a {profile.email}</p>}
    <Button loading={loading === 'calendar'} disabled={data.calendarAdded} onClick={() => perform('calendar', () => setData(d => ({ ...d, calendarAdded: true })), 'No tenemos permiso para usar tu calendario.')}>
      {data.calendarAdded ? '✓ Agregada a tu calendario' : loading === 'calendar' ? 'Agregando…' : 'Agregar al calendario'}</Button>
    {error.includes('calendario') && <><Inline title="No tenemos permiso para usar tu calendario." text="Permite el acceso para agregar la cita."/><button className="link" onClick={() => setError('')}>Permitir</button></>}
    <Button kind="secondary" onClick={() => go('S12')}>Ver Citas</Button><Button kind="secondary" onClick={() => go('S01')}>Ir al inicio</Button>
  </main></>

  else if (screen === 'S24') content = <><Header title="Más" back={back}/><main>
    <h1>Más</h1>
    <section className="more-options">
      <Button kind="secondary" onClick={() => { setMessageHelpOpen(false); setFaqOpen(false); go('S27') }}>Ayuda</Button>
      <Button kind="secondary" onClick={() => { setPazNotice(''); setReportOpen(false); setReportSent(false); go('S28') }}>Paz y salvo</Button>
    </section>
    <section className="card tools"><h2>Herramientas de prueba</h2>
      <label className="data-selector"><strong>Datos extremos</strong>
        <select value={extreme} onChange={event => {
          const selected = event.target.value as ExtremeCase
          setExtreme(selected); setDay(testData(selected).days[0]); setTime(''); setMidnightExpired(false); setMidnightCountdownStarted(false); setFailureAttempts({})
        }}>
          {extremeCases.map(option => <option key={option}>{option}</option>)}
        </select>
      </label>
      <label className="toggle"><span><strong>Simular falla de conexión</strong><small>La siguiente acción que carga o guarda fallará una vez.</small></span>
        <input type="checkbox" checked={data.failNext} onChange={e => setData(d => ({ ...d, failNext: e.target.checked }))}/><i/></label>
      <Button kind="secondary" onClick={reset}>Reiniciar el prototipo</Button>
    </section>
  </main></>

  else if (screen === 'S27') content = <><Header title="Ayuda" back={back}/><main>
    <h1>Ayuda</h1>
    <p className="support">Elige cómo podemos ayudarte.</p>
    <div className="help-options">
      <Button kind="secondary" onClick={() => setMessageHelpOpen(value => !value)}>¿Este mensaje es real?</Button>
      <Button kind="secondary" onClick={() => setFaqOpen(value => !value)}>Preguntas frecuentes</Button>
      <Button kind="secondary" onClick={() => { window.location.href = 'tel:+576023690811' }}>Llamar a la Secretaría</Button>
      <Button kind="secondary" onClick={() => startNew()}>Dónde hacer el curso</Button>
    </div>
    {messageHelpOpen && <div className="card help-card">
      <Shield/>
      <p><strong>El SIMIT no agenda ni cobra por WhatsApp</strong></p>
      <p>Nunca te enviamos enlaces para pagar por SMS</p>
      <p>Solo agendamos en puntos autorizados con este sello</p>
      <p className="support">Secretaría: (602) 369 0811</p>
    </div>}
    {faqOpen && <section className="card faq-panel">
      <h2>Preguntas frecuentes</h2>

      <div className="faq-item">
        <h2>¿Qué ley regula las multas de tránsito?</h2>
        <p>La Ley 769 de 2002 expide el Código Nacional de Tránsito Terrestre.</p>
        <p>Las infracciones y multas están en su artículo 131, modificado por el artículo 21 de la Ley 1383 de 2010.</p>
      </div>

      <div className="faq-item">
        <h2>¿De dónde salen los códigos?</h2>
        <p>La Resolución 3027 de 2010 codificó las infracciones de tránsito.</p>
        <p>La codificación está compilada en el artículo 8.5.1 de la Resolución 20223040045295 de 2022.</p>
      </div>

      <div className="faq-item">
        <h2>¿Qué norma aplica a las fotomultas?</h2>
        <p>La Ley 1843 de 2017 regula los sistemas tecnológicos para detectar infracciones.</p>
      </div>

      <div className="faq-item fine-codes">
        <h2>Interpretación de códigos de comparendos</h2>
        <p className="support">Estos códigos aparecen con frecuencia en reportes oficiales. El orden puede cambiar según la ciudad y el periodo.</p>
        <p><strong>C14</strong> · Transitar por sitios restringidos o en horarios prohibidos.</p>
        <p><strong>C02</strong> · Estacionar en sitio prohibido.</p>
        <p><strong>C35</strong> · No tener vigente la revisión técnico-mecánica o circular en malas condiciones.</p>
        <p><strong>D01</strong> · Conducir sin haber obtenido la licencia de conducción.</p>
        <p><strong>D02</strong> · Conducir sin SOAT vigente.</p>
        <p><strong>C24</strong> · Conducir motocicleta sin cumplir las normas establecidas.</p>
        <p><strong>C29</strong> · Conducir a velocidad superior a la máxima permitida.</p>
        <p><strong>C03</strong> · Bloquear una calzada o intersección con un vehículo.</p>
      </div>

      <p className="support">Fuentes oficiales: Función Pública, Secretaría del Senado, Ministerio de Transporte, DATT Cartagena y Alcaldía de Cali.</p>
    </section>}
  </main></>

  else if (screen === 'S28') content = <><Header title="Paz y salvo" back={back}/><main>
    <h1>¿De qué multa?</h1>
    <p className="support">Elige una multa pagada.</p>
    <button className="card selectable paid-fine" onClick={() => go('S29')}>
      <div className="row"><strong>Multa C · C02</strong><span className="tag">Pagada</span></div>
      <p>N.° 76001000000043910125</p>
      <p>Pagada el viernes 9 de enero de 2026 · $292.000</p>
    </button>
  </main></>

  else if (screen === 'S29') content = <><Header title="Datos del paz y salvo" back={back}/><main>
    <h1>Revisa tus datos</h1>
    <div className="card details">
      <p><strong>{profile.userName}</strong></p>
      <p>C.C. 1.130.456.779</p>
      <p>Multa N.° 76001000000043910125</p>
      <p>Pagada el viernes 9 de enero de 2026 · $292.000</p>
    </div>
    {error && <><Inline title="No pudimos generar tu paz y salvo" text="Tu pago y tus datos están a salvo. Intenta de nuevo; si sigue igual, te lo enviamos al correo."/>
      <div className="inline-actions"><button onClick={() => perform('paz', () => go('S30'), 'No pudimos generar tu paz y salvo')}>Intentar de nuevo</button>
        <button onClick={() => go('S01')}>Enviármelo después</button></div></>}
    <Button loading={loading === 'paz'} onClick={() => perform('paz', () => go('S30'), 'No pudimos generar tu paz y salvo')}>
      {loading === 'paz' ? 'Generando tu paz y salvo…' : 'Generar paz y salvo'}
    </Button>
    <Button kind="secondary" onClick={() => setReportOpen(value => !value)}>Algo no coincide</Button>
    {reportOpen && <div className="card report-panel"><h2>Algo no coincide</h2>
      <p>Cuéntanos qué dato no coincide y adjunta tu comprobante.</p>
      {reportSent ? <Inline state="success" title="Recibimos tu reporte" text="Tu número de radicado es RAD-2026-11-000384."/> :
        <Button kind="secondary" onClick={() => setReportSent(true)}>Enviar reporte</Button>}
    </div>}
  </main></>

  else if (screen === 'S30') content = <><Header title="Paz y salvo listo" back={back}/><main className="success">
    <div className="success-mark">✓</div><h1>Paz y salvo listo</h1>
    <div className="card document-preview">
      <strong>SIMIT · Paz y salvo</strong>
      <p>Multa N.° 76001000000043910125</p>
      <p>Expedido el viernes 6 de noviembre de 2026</p>
      <div className="qr placeholder">Código QR<br/>160 × 160 px</div>
    </div>
    {pazNotice && <Inline state="success" title={pazNotice === 'download' ? '¡Paz y salvo descargado!' : 'Documento compartido'} text={pazNotice === 'download'
      ? 'Listo, tu paz y salvo está en tu celular: SIMIT_PazYSalvo_76001000000043910125.pdf'
      : 'Tu paz y salvo está listo para compartir.'}/>}
    <Button onClick={() => setPazNotice('download')}>Descargar</Button>
    <Button kind="secondary" onClick={() => setPazNotice('share')}>Compartir</Button>
    <Button kind="secondary" onClick={() => go('S24')}>Ver después</Button>
  </main></>

  else if (screen === 'S02') content = <><Header title="Multas" back={back}/><main><h1>Multas</h1><FineA paid={data.fineAPaid} extreme={extreme}/>
    {extreme === '12 Total gigante' && Array.from({ length: 19 }, (_, index) => <div className="card fine-card" key={index}>
      <strong>Multa pendiente {index + 2}</strong><p>N.° {String(76001000000045218735n + BigInt(index))}</p>
      <p>C29 · Multa en la vía</p><p>{profile.fineValue}</p>
    </div>)}
    {profile.inconsistent && <div className="card fine-card"><div className="row"><strong>Multa D</strong><span className="tag">Pagada</span></div>
      <p>N.° 76001000000045001902</p><p>Cita próxima confirmada</p></div>}
    {!data.fineAPaid ? <div className="payment-actions"><Button kind="secondary" onClick={() => activeAppointment ? go('S14') : go('S06')}>{activeAppointment ? 'Ver mi cita' : 'Sacar cita para el curso'}</Button>
      <Button onClick={() => go('S19')}>Pagar</Button></div> : <><Button disabled>Multa pagada</Button><p className="disabled-reason">El pago simulado ya fue completado.</p></>}
  </main></>

  else if (screen === 'S19') content = <><Header title="Pagar" back={back}/><main><h1>Elegir qué pagar</h1><FineA compact paid={data.fineAPaid} extreme={extreme}/>
    {!data.fineAPaid ? <><p>El descuento exige hacer el curso antes del {profile.deadline}.</p>
      <Button onClick={() => activeAppointment ? go('S14') : go('S06')}>{activeAppointment ? 'Ver mi cita' : 'Sacar cita para el curso'}</Button>
      <Button kind="secondary" onClick={() => { setPaymentNotice(''); go('S20') }}>Pagar {profile.fineValue} sin descuento</Button></> :
      <Inline state="success" title="Pago simulado completado" text={`La multa A quedó pagada por ${profile.fineValue}.`}/>}
    <Button kind="secondary" onClick={() => go('S01')}>Volver al inicio</Button>
  </main></>

  else if (screen === 'S20') content = <><Header title="Elegir medio de pago" back={back}/><main><h1>¿Cómo quieres pagar?</h1>
    <div className="card"><strong>Multa A</strong><p>N.° 76001000000045218734</p><h2>{profile.fineValue}</h2><p>Pago sin descuento</p></div>
    {paymentNotice && <Inline state="success" title="Pago simulado completado" text={paymentNotice}/>}
    <div className="payment-methods">{['Nequi', 'Daviplata', 'Bancos (PSE)', 'Tarjeta', 'En persona'].map(method =>
      <Button kind="secondary" disabled={data.fineAPaid} loading={loading === `pay-${method}`} key={method} onClick={() => {
        if (method === 'En persona') { setReceiptSaved(false); go('S22'); return }
        perform(`pay-${method}`, () => {
          setData(d => ({ ...d, fineAPaid: true }))
          setPaymentNotice(`La multa A quedó pagada por ${profile.fineValue} con ${method}.`)
        }, 'No pudimos completar el pago. Tu multa sigue pendiente.')
      }}>{loading === `pay-${method}` ? 'Procesando el pago…' : method}</Button>)}</div>
    {error && <><Inline title="No pudimos completar el pago." text="Tu multa sigue pendiente."/><button className="link" onClick={() => setError('')}>Volver a intentar</button></>}
    {data.fineAPaid && <Button onClick={() => go('S02')}>Volver a Multas</Button>}
  </main></>

  else if (screen === 'S22') content = <><Header title="Pagar en persona" back={back}/><main>
    <h1>Recibo para pagar en el banco</h1>
    <div className="card bank-receipt"><div className="row"><strong>Multa A</strong><span className="tag">{profile.fineValue}</span></div>
      <p>N.° 76001000000045218734</p>
      <div className="barcode" aria-label="Código de barras para pagar en persona"><span /></div>
      <p className="barcode-number">7600-1045-0019-02</p>
      <p><strong>Válido hasta el martes 10 de noviembre</strong></p>
    </div>
    {receiptSaved && <Inline state="success" title="Recibo guardado" text="El recibo quedó guardado en tu dispositivo."/>}
    <Button loading={loading === 'saveReceipt'} disabled={receiptSaved} onClick={() =>
      perform('saveReceipt', () => setReceiptSaved(true), 'No pudimos guardar el recibo.')
    }>{receiptSaved ? '✓ Recibo guardado' : loading === 'saveReceipt' ? 'Guardando recibo…' : 'Guardar recibo'}</Button>
    {error && <><Inline title="No pudimos guardar el recibo." text="Puedes consultarlo de nuevo desde Pagar."/><button className="link" onClick={() => setError('')}>Volver a intentar</button></>}
    <Button kind="secondary" onClick={() => go('S26')}>Dónde pagar en persona</Button>
  </main></>

  else content = <><Header title="Dónde pagar en persona" back={back}/><main>
    <h1>Dónde pagar en persona</h1><p className="support">Sedes y bancos para pagar en efectivo</p>
    {[['Sede principal Salomia','Carrera 3 No. 56-90'],['La Flora','Calle 70N No. 3BN-200'],
      ['C.C. La Estación','Carrera 1 entre Calles 36 y 38, local B1-33'],
      ['C.C. Aventura Plaza','Carrera 100 No. 15A-61, piso 2']].map(([name, address]) =>
      <div className="card payment-place" key={name}><strong>{name}</strong><p>{address}</p></div>)}
    <Button kind="secondary" onClick={back}>Volver al recibo</Button>
  </main></>

  return <div className="stage"><div className="app">{content}<Nav active={activeNav} go={(s) => {
    if (s === 'S12') { setScreen('S12'); setHistory(h => [...h, screen]); perform('list', () => {}, 'No pudimos cargar tus citas. Revisa tu conexión.') } else go(s)
  }}/></div></div>
}
