"use client"

import { AppShell } from "@/app/components/app-shell"
import { AssignmentList } from "./assignments/assignment-list"

export default function WorkerAssignmentsPage() {
  return (
    <AppShell title="My Assignments">
      <AssignmentList />
    </AppShell>
  )
}
