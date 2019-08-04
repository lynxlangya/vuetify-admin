import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Layout from '@/views/layout/Layout.vue';

describe('Layout.vue', () => {
    it('renders props.msg when passed', () => {
        const msg = 'new message';
        const wrapper = shallowMount(Layout, {
            propsData: { msg }
        });
        expect(wrapper.text()).to.include(msg);
    });
});
