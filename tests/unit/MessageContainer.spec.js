import MessageContainer from '@/components/MessageContainer';
import {mount} from '@vue/test-utils';

describe('Message Container', () => {
    it('Wraps MessageDisplay component', () => {
        const wrapper = mount(MessageContainer, {
            // Criação de um substituto para o componente de verdadee, no caso o MessageDisplay
            global: {
                stubs: {
                    MessageDisplay: {
                        template: '<p data-testid="message">Hello from the db!</p>'
                    }
                }
            }
        });

        const message = wrapper.find('[data-testid="message"]').text();
        expect(message).toEqual('Hello from the db!');
    })
})