import React, { useEffect } from 'react'
import { H1 } from '@adminjs/design-system'
import { ApiClient } from 'adminjs'

export default function Dashboard() {
  const api = new ApiClient()

  useEffect(() => {
    fetchDashboardData()
  }, [])

  async function fetchDashboardData() {
    const res = await api.getDashboard()
    console.log(res.data)
  }

  return (
    <section style={{ padding: '1.5rem' }}>
      <H1>Seja bem-vindo!</H1>
    </section>
  )
}
