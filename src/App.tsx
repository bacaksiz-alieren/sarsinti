import React, { useState } from 'react'
import type { AppPage, CityId } from './types'
import MainMenu from './components/MainMenu'
import CityViewer from './components/city/CityViewer'
import CityComparison from './components/CityComparison'
import HistoricalTimeline from './components/HistoricalTimeline'
import EducationPanel from './components/EducationPanel'
import About from './components/About'

export default function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>('home')
  const [currentCity, setCurrentCity] = useState<CityId>('istanbul')

  const navigate = (page: AppPage, city?: CityId) => {
    setCurrentPage(page)
    if (city) setCurrentCity(city)
  }

  return (
    <div className="w-screen h-screen overflow-hidden">
      {currentPage === 'home' && <MainMenu onNavigate={navigate} />}
      {currentPage === 'city' && <CityViewer cityId={currentCity} onNavigate={navigate} />}
      {currentPage === 'comparison' && <CityComparison initialCity={currentCity} onNavigate={navigate} />}
      {currentPage === 'timeline' && <HistoricalTimeline initialCity={currentCity} onNavigate={navigate} />}
      {currentPage === 'education' && <EducationPanel onNavigate={navigate} />}
      {currentPage === 'about' && <About onNavigate={navigate} />}
    </div>
  )
}
