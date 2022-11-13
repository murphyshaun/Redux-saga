export interface Student {
    id?: string;
    name: string;
    age: number;
    mark: number;
    gender: 'male' | 'femal';
    city: string;
    
    createdAt?: number;
    updatedAt?: number;
}