import {App} from '../src/App'
test('App run function', () => {
    expect(App.run()).toBe(1337)
})