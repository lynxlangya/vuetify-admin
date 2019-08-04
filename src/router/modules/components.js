/** When your routing table is too long, you can split it into small modules */

import Layout from '@/views/layout/Layout.vue';

const componentsRouter = [{
    path: '/components',
    component: Layout,
    redirect: '/components/tinymce',
    name: 'ComponentDemo',
    meta: {
        title: 'route.components',
        icon: 'view_module'
    },
    children: [{
        path: 'tinymce',
        component: () => import('@/views/components-demo/tinymce'),
        name: 'TinymceDemo',
        meta: {
            title: 'route.component.tinymce'
        }
    },
    {
        path: 'markdown',
        component: () => import('@/views/components-demo/markdown'),
        name: 'MarkdownDemo',
        meta: {
            title: 'route.component.markdown'
        }
    },
    {
        path: 'json-editor',
        component: () => import('@/views/components-demo/jsonEditor'),
        name: 'JsonEditorDemo',
        meta: {
            title: 'route.component.jsonEditor'
        }
    },
    {
        path: 'splitpane',
        component: () => import('@/views/components-demo/splitpane'),
        name: 'SplitpaneDemo',
        meta: {
            title: 'route.component.splitPane'
        }
    },
    {
        path: 'avatar-upload',
        component: () => import('@/views/components-demo/avatarUpload'),
        name: 'AvatarUploadDemo',
        meta: {
            title: 'route.component.avatarUpload'
        }
    },
    {
        path: 'dropzone',
        component: () => import('@/views/components-demo/dropzone'),
        name: 'DropzoneDemo',
        meta: {
            title: 'route.component.dropzone'
        }
    },
    {
        path: 'sticky',
        component: () => import('@/views/components-demo/sticky'),
        name: 'StickyDemo',
        meta: {
            title: 'route.component.sticky'
        }
    },
    {
        path: 'count-to',
        component: () => import('@/views/components-demo/countTo'),
        name: 'CountToDemo',
        meta: {
            title: 'route.component.countTo'
        }
    },
    {
        path: 'back-to-top',
        component: () => import('@/views/components-demo/backToTop'),
        name: 'BackToTopDemo',
        meta: {
            title: 'route.component.backToTop'
        }
    },
    {
        path: 'drag-kanban',
        component: () => import('@/views/components-demo/dragKanban'),
        name: 'DragKanbanDemo',
        meta: {
            title: 'route.component.dragKanban'
        }
    }
    ]
},
{
    path: '/charts',
    component: Layout,
    redirect: '/charts/keyboard',
    name: 'Charts',
    meta: {
        title: 'route.charts',
        icon: 'bar_chart'
    },
    children: [{
        path: 'keyboard',
        component: () => import('@/views/components-demo/chart.vue'),
        name: 'KeyboardChart',
        meta: {
            title: 'route.chart.keyboardChart',
            noCache: true
        },
        props: {
            keyboard: true
        }
    },
    {
        path: 'line',
        component: () => import('@/views/components-demo/chart.vue'),
        name: 'LineChart',
        meta: {
            title: 'route.chart.lineChart',
            noCache: true
        },
        props: {
            line: true
        }
    },
    {
        path: 'mix-chart',
        component: () => import('@/views/components-demo/chart.vue'),
        name: 'MixChart',
        meta: {
            title: 'route.chart.mixChart',
            noCache: true
        },
        props: {
            mix: true
        }
    }
    ]
},
{
    path: '/theme',
    component: Layout,
    redirect: '/theme/index',
    children: [{
        path: 'index',
        component: () => import('@/views/components/Theme.vue'),
        name: 'Theme',
        meta: {
            title: 'route.theme',
            icon: 'color_lens'
        }
    }]
},
{
    path: '/i18n',
    component: Layout,
    redirect: '/i18n/index',
    children: [{
        path: 'index',
        component: () => import('@/views/components/I18n.vue'),
        name: 'I18n',
        meta: {
            title: 'route.i18n',
            icon: 'language'
        }
    }]
}
];

export default componentsRouter;
