import api from '@/services/api'

export default {
    register (credentials){
        return api().post('register', credentials)
    }
}

/* This is how we call this method from another file:

authService.register({
    email: 'test@gmail.com',
    password: '12345'
}) */
