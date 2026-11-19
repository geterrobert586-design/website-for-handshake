"use client"

import { useEffect, useState, type FormEvent } from "react"
import { Check, ClipboardList, Pencil, Plus, RotateCcw, Trash2, X } from "lucide-react"

type WorkOrderStatus = "Open" | "In progress" | "Completed"
type WorkOrder = { id: string; problem: string; date: string; technician: string; action: string; status: WorkOrderStatus }
type WorkOrderDraft = Omit<WorkOrder, "id">

const STORAGE_KEY = "rgeter-work-orders-v1"
const sampleOrders: WorkOrder[] = [
  { id: "sample-1", problem: "Guest room AC not cooling", date: "2026-10-28", technician: "Robert", action: "Checked thermostat and scheduled a filter inspection.", status: "In progress" },
  { id: "sample-2", problem: "Replace hallway light fixture", date: "2026-10-26", technician: "Facilities team", action: "Replaced lamp and confirmed fixture operation.", status: "Completed" },
  { id: "sample-3", problem: "Investigate slow sink drain", date: "2026-10-29", technician: "Unassigned", action: "Initial inspection requested.", status: "Open" },
]
const emptyDraft: WorkOrderDraft = { problem: "", date: new Date().toISOString().slice(0, 10), technician: "", action: "", status: "Open" }

export function WorkOrderDemo() {
  const [orders, setOrders] = useState<WorkOrder[]>(sampleOrders)
  const [hydrated, setHydrated] = useState(false)
  const [draft, setDraft] = useState<WorkOrderDraft>(emptyDraft)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formOpen, setFormOpen] = useState(false)
  const [error, setError] = useState("")
  const [notice, setNotice] = useState("")

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed: unknown = JSON.parse(saved)
        if (Array.isArray(parsed)) setOrders(parsed as WorkOrder[])
      }
    } catch {
      setNotice("Saved browser data could not be read. The sample list is available to use.")
    }
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(orders))
    } catch {
      setNotice("Browser storage is unavailable. Changes will last only for this session.")
    }
  }, [orders, hydrated])

  function openNewForm() {
    setEditingId(null)
    setDraft(emptyDraft)
    setError("")
    setFormOpen(true)
  }

  function editOrder(order: WorkOrder) {
    setEditingId(order.id)
    setDraft({ problem: order.problem, date: order.date, technician: order.technician, action: order.action, status: order.status })
    setError("")
    setFormOpen(true)
    document.getElementById("work-order-form")?.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  function submitOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!draft.problem.trim() || !draft.date || !draft.technician.trim() || !draft.action.trim()) {
      setError("Complete each required field before saving this work order.")
      return
    }
    if (editingId) {
      setOrders(current => current.map(order => order.id === editingId ? { ...draft, id: editingId } : order))
      setNotice("Work order updated.")
    } else {
      setOrders(current => [{ ...draft, id: crypto.randomUUID() }, ...current])
      setNotice("Work order added.")
    }
    setDraft(emptyDraft)
    setEditingId(null)
    setFormOpen(false)
    setError("")
  }

  function deleteOrder(id: string) {
    setOrders(current => current.filter(order => order.id !== id))
    setNotice("Work order deleted.")
    if (editingId === id) {
      setFormOpen(false)
      setEditingId(null)
    }
  }

  function resetOrders() {
    setOrders(sampleOrders)
    setDraft(emptyDraft)
    setEditingId(null)
    setFormOpen(false)
    setError("")
    setNotice("Sample work orders restored.")
  }

  const completed = orders.filter(order => order.status === "Completed").length
  const active = orders.filter(order => order.status !== "Completed").length

  return (
    <section className="demo-section" id="demo" aria-labelledby="demo-title">
      <div className="shell">
        <div className="demo-banner"><span className="demo-banner-icon"><ClipboardList aria-hidden="true" size={18} /></span><p><strong>Interactive browser demo</strong><span>Not a live production system · Data is saved only in this browser</span></p><span className="demo-banner-status"><span /> LOCAL DEMO</span></div>
        <div className="tracker-card">
          <div className="tracker-heading"><div><span className="tracker-eyebrow">MAINTENANCE OPERATIONS</span><h2 id="demo-title">Work order tracker</h2><p>A simple, organized view of the work that needs doing.</p></div><button className="button button-primary tracker-add" type="button" onClick={openNewForm}><Plus aria-hidden="true" size={16} /> Add work order</button></div>
          <div className="tracker-stats" aria-label="Work order summary"><div><strong>{orders.length.toString().padStart(2, "0")}</strong><span>Total work orders</span></div><div><strong>{active.toString().padStart(2, "0")}</strong><span>Needs attention</span></div><div><strong>{completed.toString().padStart(2, "0")}</strong><span>Completed</span></div><button className="reset-button" type="button" onClick={resetOrders}><RotateCcw aria-hidden="true" size={14} /> Restore sample data</button></div>
          {formOpen && <form className="work-order-form" id="work-order-form" onSubmit={submitOrder} noValidate><div className="form-heading"><div><span className="tracker-eyebrow">{editingId ? "UPDATE RECORD" : "NEW RECORD"}</span><h3>{editingId ? "Edit work order" : "Add a work order"}</h3></div><button className="icon-button" type="button" aria-label="Close work order form" onClick={() => { setFormOpen(false); setError("") }}><X size={18} /></button></div><div className="form-grid"><label className="form-field form-field-wide">Maintenance problem <span>*</span><input required maxLength={120} value={draft.problem} onChange={event => setDraft({ ...draft, problem: event.target.value })} placeholder="What needs attention?" aria-invalid={Boolean(error && !draft.problem.trim())} /></label><label className="form-field">Date reported <span>*</span><input required type="date" value={draft.date} onChange={event => setDraft({ ...draft, date: event.target.value })} /></label><label className="form-field">Technician <span>*</span><input required maxLength={80} value={draft.technician} onChange={event => setDraft({ ...draft, technician: event.target.value })} placeholder="Name or unassigned" aria-invalid={Boolean(error && !draft.technician.trim())} /></label><label className="form-field">Status<select value={draft.status} onChange={event => setDraft({ ...draft, status: event.target.value as WorkOrderStatus })}><option>Open</option><option>In progress</option><option>Completed</option></select></label><label className="form-field form-field-wide">Action taken / next step <span>*</span><textarea required rows={3} maxLength={500} value={draft.action} onChange={event => setDraft({ ...draft, action: event.target.value })} placeholder="Describe work completed or the next step." aria-invalid={Boolean(error && !draft.action.trim())} /></label></div>{error && <p className="form-error" role="alert">{error}</p>}<div className="form-actions"><span>* Required fields</span><button className="button button-secondary" type="button" onClick={() => { setFormOpen(false); setError("") }}>Cancel</button><button className="button button-primary" type="submit"><Check aria-hidden="true" size={15} />{editingId ? "Save changes" : "Save work order"}</button></div></form>}
          <div className="orders-table-wrap"><table className="orders-table"><caption className="sr-only">Maintenance work orders with report date, technician, action, and status</caption><thead><tr><th scope="col">PROBLEM / DATE</th><th scope="col">TECHNICIAN</th><th scope="col">ACTION / NEXT STEP</th><th scope="col">STATUS</th><th scope="col"><span className="sr-only">Actions</span></th></tr></thead><tbody>{orders.map(order => <tr key={order.id}><td><strong>{order.problem}</strong><span>{new Date(`${order.date}T12:00:00`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span></td><td>{order.technician}</td><td className="action-cell">{order.action}</td><td><span className={`status-pill status-${order.status.toLowerCase().replaceAll(" ", "-")}`}><span />{order.status}</span></td><td><div className="row-actions"><button className="icon-button" type="button" onClick={() => editOrder(order)} aria-label={`Edit ${order.problem}`}><Pencil size={15} /></button><button className="icon-button delete-button" type="button" onClick={() => deleteOrder(order.id)} aria-label={`Delete ${order.problem}`}><Trash2 size={15} /></button></div></td></tr>)}</tbody></table>{orders.length === 0 && <div className="empty-orders"><ClipboardList aria-hidden="true" size={24} /><p>No work orders yet.</p><button className="text-link" onClick={openNewForm} type="button">Add your first record <Plus size={14} /></button></div>}</div>
          <p className="tracker-notice" aria-live="polite">{notice || "Your changes are stored locally on this device."}</p>
        </div>
      </div>
    </section>
  )
}
