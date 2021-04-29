import FilterSidebarDetail from '@/views/private/components/filter-sidebar-detail';
import RenderDisplay from '@/views/private/components/render-display';
import RenderTemplate from '@/views/private/components/render-template';
import SidebarDetail from '@/views/private/components/sidebar-detail/';
import UserPopover from '@/views/private/components/user-popover';
import ValueNull from '@/views/private/components/value-null';
import { App } from 'vue';
import TransitionBounce from './transition/bounce';
import TransitionDialog from './transition/dialog';
import TransitionExpand from './transition/expand';
import VAvatar from './v-avatar/';
import VBadge from './v-badge/';
import VBreadcrumb from './v-breadcrumb';
import VButtonGroup from './v-button-group/';
import VButton from './v-button/';
import VCard, { VCardActions, VCardSubtitle, VCardText, VCardTitle } from './v-card';
import VCheckbox from './v-checkbox/';
import VChip from './v-chip/';
import VDetail from './v-detail';
import VDialog from './v-dialog';
import VDivider from './v-divider';
import VDrawer from './v-drawer/';
import VError from './v-error';
import VFancySelect from './v-fancy-select';
import VFieldSelect from './v-field-select';
import VFieldTemplate from './v-field-template';
import VForm from './v-form';
import VHover from './v-hover/';
import VIcon from './v-icon/';
import VInfo from './v-info/';
import VInput from './v-input/';
import VItemGroup, { VItem } from './v-item-group';
import VList, { VListGroup, VListItem, VListItemContent, VListItemHint, VListItemIcon } from './v-list/';
import VMenu from './v-menu/';
import VNotice from './v-notice/';
import VOverlay from './v-overlay/';
import VPagination from './v-pagination/';
import VProgressCircular from './v-progress/circular/';
import VProgressLinear from './v-progress/linear/';
import VRadio from './v-radio/';
import VSelect from './v-select/';
import VSheet from './v-sheet/';
import VSkeletonLoader from './v-skeleton-loader/';
import VSlider from './v-slider/';
import VSwitch from './v-switch/';
import VTable from './v-table/';
import VTabs, { VTab, VTabItem, VTabsItems } from './v-tabs/';
import VTextOverflow from './v-text-overflow.vue';
import VTextarea from './v-textarea';
import VUpload from './v-upload';

export function registerComponents(app: App): void {
	app.component('v-avatar', VAvatar);
	app.component('v-badge', VBadge);
	app.component('v-breadcrumb', VBreadcrumb);
	app.component('v-button', VButton);
	app.component('v-button-group', VButtonGroup);
	app.component('v-card-actions', VCardActions);
	app.component('v-card-subtitle', VCardSubtitle);
	app.component('v-card-text', VCardText);
	app.component('v-card-title', VCardTitle);
	app.component('v-card', VCard);
	app.component('v-checkbox', VCheckbox);
	app.component('v-chip', VChip);
	app.component('v-detail', VDetail);
	app.component('v-dialog', VDialog);
	app.component('v-divider', VDivider);
	app.component('v-error', VError);
	app.component('v-fancy-select', VFancySelect);
	app.component('v-field-template', VFieldTemplate);
	app.component('v-field-select', VFieldSelect);
	app.component('v-form', VForm);
	app.component('v-hover', VHover);
	app.component('v-icon', VIcon);
	app.component('v-info', VInfo);
	app.component('v-input', VInput);
	app.component('v-item-group', VItemGroup);
	app.component('v-item', VItem);
	app.component('v-list-group', VListGroup);
	app.component('v-list-item-content', VListItemContent);
	app.component('v-list-item-hint', VListItemHint);
	app.component('v-list-item-icon', VListItemIcon);
	app.component('v-list-item', VListItem);
	app.component('v-list', VList);
	app.component('v-menu', VMenu);
	app.component('v-drawer', VDrawer);
	app.component('v-notice', VNotice);
	app.component('v-overlay', VOverlay);
	app.component('v-pagination', VPagination);
	app.component('v-progress-circular', VProgressCircular);
	app.component('v-progress-linear', VProgressLinear);
	app.component('v-radio', VRadio);
	app.component('v-select', VSelect);
	app.component('v-sheet', VSheet);
	app.component('v-skeleton-loader', VSkeletonLoader);
	app.component('v-slider', VSlider);
	app.component('v-switch', VSwitch);
	app.component('v-tab-item', VTabItem);
	app.component('v-tab', VTab);
	app.component('v-table', VTable);
	app.component('v-tabs-items', VTabsItems);
	app.component('v-tabs', VTabs);
	app.component('v-textarea', VTextarea);
	app.component('v-text-overflow', VTextOverflow);
	app.component('v-upload', VUpload);

	app.component('transition-bounce', TransitionBounce);
	app.component('transition-dialog', TransitionDialog);
	app.component('transition-expand', TransitionExpand);

	app.component('render-display', RenderDisplay);
	app.component('render-template', RenderTemplate);
	app.component('filter-sidebar-detail', FilterSidebarDetail);
	app.component('sidebar-detail', SidebarDetail);
	app.component('user-popover', UserPopover);
	app.component('value-null', ValueNull);
}
