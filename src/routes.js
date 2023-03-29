import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
// const Accordion = React.lazy(() => import('./views/base1/accordion/Accordion'))
// const Breadcrumbs = React.lazy(() => import('./views/base1/breadcrumbs/Breadcrumbs'))
// const Cards = React.lazy(() => import('./views/base1/cards/Cards'))
// const Carousels = React.lazy(() => import('./views/base1/carousels/Carousels'))
// const Collapses = React.lazy(() => import('./views/base1/collapses/Collapses'))
// const ListGroups = React.lazy(() => import('./views/base1/list-groups/ListGroups'))
// const Navs = React.lazy(() => import('./views/base1/navs/Navs'))
// const Paginations = React.lazy(() => import('./views/base1/paginations/Paginations'))
// const Placeholders = React.lazy(() => import('./views/base1/placeholders/Placeholders'))
// const Popovers = React.lazy(() => import('./views/base1/popovers/Popovers'))
// const Progress = React.lazy(() => import('./views/base1/progress/Progress'))
// const Spinners = React.lazy(() => import('./views/base1/spinners/Spinners'))
// const Tables = React.lazy(() => import('./views/base1/tables/Tables'))
// const Tooltips = React.lazy(() => import('./views/base1/tooltips/Tooltips'))

// Buttons
// const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
// const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
// const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
// const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
// const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
// const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
// const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
// const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
// const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
// const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

// const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
// const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
// const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
// const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
// const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
// const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
// const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
// const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

// const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard }

]

export default routes
