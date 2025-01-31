
export interface user{
    id:string,
    name: string,
    email: string,
    phone: string,
    address: {
        street: string,
        city: string,
        state: string,
        zip: string
    },
    dob: string,
    is_active:boolean,
    created_at: string
}