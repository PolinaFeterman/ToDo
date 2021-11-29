import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import { createLocalVue } from '@vue/test-utils';
import ToDo from '@/components/ToDo.vue';
import Vuetify from 'vuetify';
import Vue from 'vue';

Vue.use(Vuetify);
describe('ToDo.vue', () => {
    let vuetify;
    const localVue = createLocalVue();
    const todo = {
        title: 'todo 1',
        completed: false,
        editMode: false,
        text: 'text1',
        id: 1,
    };
    beforeEach(() => {
        vuetify = new Vuetify();
    });

    it('should render correctly', () => {});
    it('should assign props.todo correctly', () => {
        const wrapper = shallowMount(ToDo, {
            localVue,
            vuetify,
            propsData: { todo },
        });
        expect(JSON.stringify(wrapper.vm.todo)).to.equal(JSON.stringify(todo));
    });
    it('should set todo to completed and edit', async () => {
        const wrapper = shallowMount(ToDo, {
            localVue,
            vuetify,
            propsData: { todo },
        });
        const btnCompleteToDo = wrapper.find('#completeToDo');
        const btnEditToDo = wrapper.find('#editToDo');
        todo.completed = true;
        btnCompleteToDo.trigger('click');
        await wrapper.vm.$nextTick();
        expect(JSON.stringify(wrapper.vm.todo)).to.equal(JSON.stringify(todo));
        todo.editMode = true;
        btnEditToDo.trigger('click');
        await wrapper.vm.$nextTick();
        expect(JSON.stringify(wrapper.vm.todo)).to.equal(JSON.stringify(todo));
    });
});
