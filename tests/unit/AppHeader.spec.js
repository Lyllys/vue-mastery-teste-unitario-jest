import AppHeader from '@/components/AppHeader';
import { resolveComponentType } from '@vue/compiler-core';
import {mount} from '@vue/test-utils'
import { TestWatcher } from 'jest';

// A função describe() não é necessária se você tiver apenas um teste.
// Ela ajuda mais quando você possui múltiplos testes e você quer organizá-los 
// em uma mesma suite de testes. 
describe('AppHeader', () => {
    test('If user is not logged in, do not show logout button' , () =>{
        const wrapper = mount(AppHeader);
        expect(wrapper.find('button').isVisible()).toBe(false);
    })
    // pode ser it() ao invés de test().
    // utilizamos o async await porque precisamos esperar atualização no DOM. 
    test('If user is logged in, show logout button' , async () => {
        // o mount permite ter acesso a funções para testar o componente.
        const wrapper = mount(AppHeader);
        // o setData é usado para atualizar o valor de uma propriedade
        await wrapper.setData({loggedIn: true});
        expect(wrapper.find('button').isVisible()).toBe(true);
    })
})