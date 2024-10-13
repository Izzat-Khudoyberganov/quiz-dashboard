import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

interface FormInputProps {
    name: string;
    label: string;
    placeholder: string;
    control: any;
}

const FormInput: React.FC<FormInputProps> = ({
    name,
    label,
    placeholder,
    control,
}) => (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
            <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                    <Input placeholder={placeholder} {...field} />
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
    />
);

export default FormInput;
