import React from 'react'
import { Route, Redirect, IndexRoute } from 'react-router'

// Base Layout
import Base from './layout/Base'

// Foundations Pages
import ColorsPage from './pages/foundations/Colors/Page'
import IconographyPage from './pages/foundations/Iconography/Page'

// Component Pages
import ComponentsPage from './pages/components/Page'
import AlertsPage from './pages/components/Alerts/Page'
import AvatarPage from './pages/components/Avatar/Page'
import BadgePage from './pages/components/Badge/Page'
import BreadcrumbPage from './pages/components/Breadcrumb/Page'
import ButtonsPage from './pages/components/Buttons/Page'
import ButtonGroupPage from './pages/components/ButtonGroup/Page'
import ColorPickerPage from './pages/components/ColorPicker/Page'
import DatePickerPage from './pages/components/DatePicker/Page'
import CheckboxPage from './pages/components/Checkbox/Page'
import ChipPage from './pages/components/Chip/Page'
import DropdownPage from './pages/components/Dropdown/Page'
import HomePage from './pages/Home/Page'
import IconsPage from './pages/components/Icons/Page'
import FileUploadPage from './pages/components/FileUpload/Page'
import FormGroupPage from './pages/components/FormGroup/Page'
import NavPage from './pages/components/Nav/Page'
import RadioGroupPage from './pages/components/RadioGroup/Page'
import InputPage from './pages/components/Input/Page'
import ModalPage from './pages/components/Modal/Page'
import InputListPage from './pages/components/InputList/Page'
import InlineEditPage from './pages/components/InlineEdit/Page'
import MultiSelectPage from './pages/components/MultiSelect/Page'
import TooltipPage from './pages/components/Tooltip/Page'
import PopoverPage from './pages/components/Popover/Page'
import ProgressBarPage from './pages/components/ProgressBar/Page'
import PanelGroupPage from './pages/components/PanelGroup/Page'
import SelectFieldPage from './pages/components/SelectField/Page'
import SortableListPage from './pages/components/SortableList/Page'
import SpinnerPage from './pages/components/Spinner/Page'
import TabsPage from './pages/components/TabWrapper/Page'
import TogglePage from './pages/components/Toggle/Page'
import TextareaPage from './pages/components/Textarea/Page'
import TextEditorPage from './pages/components/TextEditor/Page'
import TypeaheadPage from './pages/components/Typeahead/Page'

const Routes = (
  <Route path='/' component={Base}>
    <IndexRoute component={HomePage} />
    <Redirect from='foundations' to='/foundations/colors' />
    <Route path='foundations' title='Foundations'>
      <Route path='colors' title='Colors' component={ColorsPage} />
      <Route path='iconography' title='Iconography' component={IconographyPage} />
    </Route>
    <Route path='components' title='Components'>
      <IndexRoute component={ComponentsPage} />
      <Route path='alerts' title='Alerts' component={AlertsPage} />
      <Route path='avatar' title='Avatar' component={AvatarPage} />
      <Route path='badge' title='Badge' component={BadgePage} />
      <Route path='breadcrumb' title='Breadcrumb' component={BreadcrumbPage} />
      <Route path='dropdown' title='Dropdown' component={DropdownPage} />
      <Route path='button-group' title='Button Group' component={ButtonGroupPage} />
      <Route path='buttons' title='Buttons' component={ButtonsPage} />
      <Route path='checkbox' title='Checkbox' component={CheckboxPage} />
      <Route path='chip' title='Chip' component={ChipPage} />
      <Route path='color-picker' title='Color Picker' component={ColorPickerPage} />
      <Route path='date-picker' title='Date Picker' component={DatePickerPage} />
      <Route path='file-upload' title='File Upload' component={FileUploadPage} />
      <Route path='form-group' title='Form Group' component={FormGroupPage} />
      <Route path='icons' title='Icons' component={IconsPage} />
      <Route path='inline-edit' title='Inline Edit' component={InlineEditPage} />
      <Route path='input' title='Input' component={InputPage} />
      <Route path='input-list' title='Input List' component={InputListPage} />
      <Route path='modal' title='Modal' component={ModalPage} />
      <Route path='multi-select' title='Multi Select' component={MultiSelectPage} />
      <Route path='nav' title='Nav' component={NavPage} />
      <Route path='panel-group' title='Panel Group' component={PanelGroupPage} />
      <Route path='popover' title='Popover' component={PopoverPage} />
      <Route path='progress-bar' title='Progress Bar' component={ProgressBarPage} />
      <Route path='select-field' title='Select Field' component={SelectFieldPage} />
      <Route path='sortable-list' title='Sortable List' component={SortableListPage} />
      <Route path='spinner' title='Spinner' component={SpinnerPage} />
      <Route path='radio' title='Radio' component={RadioGroupPage} />
      <Route path='radio-group' title='Radio Group' component={RadioGroupPage} />
      <Route path='tabs' title='Tabs' component={TabsPage} />
      <Route path='textarea' title='Textarea' component={TextareaPage} />
      <Route path='text-editor' title='Text Editor' component={TextEditorPage} />
      <Route path='toggle' title='Toggle' component={TogglePage} />
      <Route path='tooltip' title='Tooltip' component={TooltipPage} />
      <Route path='typeahead' title='Typeahead' component={TypeaheadPage} />
    </Route>
    <Redirect from='*' to='/' />
  </Route>
)

export default Routes
