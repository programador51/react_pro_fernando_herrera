import { ChangeEvent, useState } from "react";

export default function useForm<T>(initialData: T) {
    const [formData, setFormData] = useState(initialData);



    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return {
        formData, onChange, ...formData
    }
}