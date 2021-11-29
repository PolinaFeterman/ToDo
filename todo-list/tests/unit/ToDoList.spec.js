import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import { createLocalVue } from '@vue/test-utils';
import ToDoList from '@/components/ToDoList.vue';
import Vuetify from 'vuetify';
import Vue from 'vue';

Vue.use(Vuetify);
describe('ToDoList.vue', () => {
    let vuetify;
    const localVue = createLocalVue();
    const todos = [
        {
            title: 'todo 1',
            completed: false,
            editMode: false,
            text: 'text1',
            id: 1,
        },
        {
            title: 'todo 2',
            completed: true,
            editMode: false,
            text: 'text2',
            id: 2,
        },
        {
            title: 'todo 3',
            completed: true,
            editMode: false,
            text: 'text3',
            id: 2,
        },
    ];
    beforeEach(() => {
        vuetify = new Vuetify();
        vuetify.mocks = {
            $vuetify: {
                breakpoint: {
                    name: 'sm',
                },
            },
        };
    });

    it('should render correctly', () => {});
    it('should assign props.todos correctly', () => {
        const wrapper = shallowMount(ToDoList, {
            localVue,
            vuetify,
            propsData: { todos },
        });
        expect(JSON.stringify(wrapper.vm.filteredTodos)).to.equal(
            JSON.stringify(todos)
        );
    });
    it('should filter todos correctly', async () => {
        const wrapper = shallowMount(ToDoList, {
            localVue,
            vuetify,
            propsData: { todos },
        });

        const activeTodos = [
            {
                title: 'todo 1',
                completed: false,
                editMode: false,
                text: 'text1',
                id: 1,
            },
        ];
        await wrapper.setData({ filterTodos: 1 });
        await wrapper.vm.$nextTick();
        expect(JSON.stringify(wrapper.vm.filteredTodos)).to.equal(
            JSON.stringify(activeTodos)
        );
        const completedToDos = [
            {
                title: 'todo 2',
                completed: true,
                editMode: false,
                text: 'text2',
                id: 2,
            },
            {
                title: 'todo 3',
                completed: true,
                editMode: false,
                text: 'text3',
                id: 2,
            },
        ];
        await wrapper.setData({ filterTodos: 2 });
        await wrapper.vm.$nextTick();
        expect(JSON.stringify(wrapper.vm.filteredTodos)).to.equal(
            JSON.stringify(completedToDos)
        );
        await wrapper.setData({ filterTodos: 0 });
        await wrapper.vm.$nextTick();
        expect(JSON.stringify(wrapper.vm.filteredTodos)).to.equal(
            JSON.stringify(todos)
        );
    });
});
