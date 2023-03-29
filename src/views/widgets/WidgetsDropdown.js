import React, { useState, useEffect } from 'react'
import {
  CRow,
  CCol,
  CWidgetStatsA,
  CSpinner
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import { yearlyData, getMonthlyData, getIncidents } from "../../data/data";

const WidgetsDropdown = () => {
  let [warmleads, setWarmLeads] = useState([]);
  let [responded, setResponded] = useState([]);
  let [totalLeads, setTotalLeads] = useState([]);
  let [unvisited, setUnvisited] = useState([]);
  let [totalLeadsYearly, setTotalLeadsYearly] = useState([]);
  let [totalWarmLeadsYearly, setTotalWarmLeadsYearly] = useState([]);
  let [totalRespondedYearly, setTotalRespondedYearly] = useState([]);
  let [totalNotVisitedYearly, setTotalNotVisitedYearly] = useState([]);
  let [isLoading, setIsLoading] = useState(true)

  const getData = async () => {
    try {
      const response = await getMonthlyData();
      setTotalLeads(response);
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setIsLoading(true)
    getData()
  }, [])

  useEffect(() => {

    const warmleads = totalLeads?.filter((d) => {
      return d.type.toLowerCase() === "WARM_LEAD".toLowerCase();
    });
    const responded = totalLeads?.filter((d) => {
      return d.type.toLowerCase() === "RESPONDED".toLowerCase();
    });
    const unvisited = totalLeads?.filter((d) => {
      return d.type.toLowerCase() === "UNVISITED".toLowerCase();
    });

    setWarmLeads(warmleads);
    setResponded(responded);
    setUnvisited(unvisited);

    setTotalLeadsYearly(yearlyData.total_leads);
    setTotalWarmLeadsYearly(yearlyData.warm_leads);
    setTotalRespondedYearly(yearlyData.leads_responded);
    setTotalNotVisitedYearly(yearlyData.leads_unresponded);

  }, [totalLeads]);

  if (isLoading) {
    return <CSpinner color="primary" className='spinner' align="center" />
  }

  return (
    <CRow>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="primary"
          value={
            <>
              {totalLeads.length}
            </>
          }
          title="Total Leads"
          chart={
            <CChartLine
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: Object.keys(totalLeadsYearly),
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointBackgroundColor: getStyle('--cui-primary'),
                    data: Object.values(totalLeadsYearly),
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: 30,
                    max: 89,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                    tension: 0.4,
                  },
                  point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="info"
          value={
            <>
              {warmleads.length}
            </>
          }
          title="Warm Leads"
          chart={
            <CChartLine
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: Object.keys(totalWarmLeadsYearly),
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointBackgroundColor: getStyle('--cui-info'),
                    data: Object.values(totalWarmLeadsYearly),
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: -9,
                    max: 39,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                  },
                  point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="warning"
          value={
            <>
              {responded.length}
            </>
          }
          title="Leads Responded"
          chart={
            <CChartLine
              className="mt-3"
              style={{ height: '70px' }}
              data={{
                labels: Object.keys(totalRespondedYearly),
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: Object.values(totalRespondedYearly),
                    fill: true,
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    display: false,
                  },
                  y: {
                    display: false,
                  },
                },
                elements: {
                  line: {
                    borderWidth: 2,
                    tension: 0.4,
                  },
                  point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="danger"
          value={
            <>
              {unvisited.length}
            </>
          }
          title="Leads Unvisited"
          chart={
            <CChartBar
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: Object.keys(totalNotVisitedYearly),
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: Object.values(totalNotVisitedYearly),
                    barPercentage: 0.6,
                  },
                ],
              }}
              options={{
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    grid: {
                      display: false,
                      drawBorder: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
              }}
            />
          }
        />
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
