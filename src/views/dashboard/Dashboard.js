import React, { useState, useEffect, Suspense } from 'react'
import './style.css'
import {
  CAvatar,
  CCol,
  CProgress,
  CRow,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CFormSelect,
  CPagination,
  CPaginationItem,
  CSpinner
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import WidgetsBrand from '../widgets/WidgetsBrand'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import Select from 'react-select';
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import WidgetsDropdown from '../widgets/WidgetsDropdown'
import { monthlyRecord, incidents, yearlyData } from "../../data/data";


function Inbox({ data, selectedOption }) {
  let [selectedLead, setSelectedLead] = useState({});
  let [pageNo, setPageNo] = useState(1);
  let [filteredData, setFilteredData] = useState(data);

  const handleClick = (item) => {
    setSelectedLead(item);
  };

  useEffect(() => {
    if (selectedOption.value === 'ALL') {
      setFilteredData(data)
      return
    }
    const filteredData = data?.filter(d => d.type.toLowerCase() === selectedOption.value.toLowerCase())
    setFilteredData(filteredData)
  }, [selectedOption])

  return (
    <>
      <div className="inbox-container">
        <div className="left-bar">
          {filteredData.slice(filteredData.length / 6)?.map((d) => {
            return <Item item={d} handleClick={handleClick} />;
          })}
        </div>

        <div className="right-bar">
          <Suspense fallback={<CSpinner color="primary" />}>
            {
              incidents?.map((incident) => {
                if (Object.keys(selectedLead).length == 0) return <div />
                return (
                  incident.type === "LEAD_TO_ADMIN" ? <div className="msger-chat" >
                    <div className="msg-bubble">
                      <div className="msg-info">
                        <div className="msg-info-name">{selectedLead.emailid}</div>
                        <div className="msg-info-time">12:45</div>
                      </div>

                      <div className="msg-text">
                        {incident.content}
                      </div>
                    </div>
                  </div> : <div className="msg right-msg">
                    <div className="msg-img"> <CAvatar size="md" src={selectedLead.avatar} />
                    </div>

                    <div className="msg-bubble">
                      <div className="msg-info">
                        <div className="msg-info-name">Admin</div>
                        <div className="msg-info-time">12:46</div>
                        <div className="msg-info-time"></div>
                      </div>

                      <div className="msg-text">{incident.content}
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </Suspense>
        </div>
      </div>
      <CPagination size="sm" align="center" aria-label="Page navigation example">
        <CPaginationItem disabled={pageNo === 1}>Previous</CPaginationItem>
        <CPaginationItem>{pageNo}</CPaginationItem>
        <CPaginationItem>{pageNo + 1}</CPaginationItem>
        <CPaginationItem>{pageNo + 2}</CPaginationItem>
        <CPaginationItem disabled={pageNo === filteredData.length / 6 - 1}>Next</CPaginationItem>
      </CPagination>
    </>
  );
}

function Item({ item, handleClick }) {
  return (
    <div className="item-container" onClick={() => handleClick(item)}>
      <div className="email-to">
        <div> {item.emailid} </div><div className="time">{item.time}</div>{' '}
      </div>
      <div className="content">{item.content}</div>
    </div>
  );
}

const Dashboard = () => {

  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  const defaultValue = {
    id: 0,
    value: "ALL",
    label: "All Leads",
  };


  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const handleChange = (option, element) => {
    setSelectedOption(option);
  };
  return (
    <>
      <WidgetsDropdown />
      <WidgetsBrand withCharts />

      <CCard className="mb-4">
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
            {progressExample.map((item, index) => (
              <CCol className="mb-sm-2 mb-0" key={index}>
                <div className="text-medium-emphasis">{item.title}</div>
                <strong>
                  {item.value} ({item.percent}%)
                </strong>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>{selectedOption.label}</strong>
              <Select
                className="leads-select"
                options={[
                  {
                    id: 1,
                    value: 'RESPONDED',
                    label: 'Responded leads',
                  },
                  {
                    id: 2,
                    value: 'WARM_LEAD',
                    label: 'Warm leads',
                  },
                  {
                    id: 3,
                    value: 'UNVISITED',
                    label: 'Unvisited leads',
                  },
                  {
                    id: 4,
                    value: 'ALL',
                    label: 'All leads',
                  }
                ]}
                value={selectedOption}
                onChange={handleChange}
              />
            </CCardHeader>
            <CCardBody>
              <Inbox data={monthlyRecord} selectedOption={selectedOption} />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

    </>
  )
}

export default Dashboard
