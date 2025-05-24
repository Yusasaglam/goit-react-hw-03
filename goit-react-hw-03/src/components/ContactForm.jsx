import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Too short!')
        .max(50, 'Too long!')
        .required('Required'),
    number: Yup.string()
        .min(5, 'Too short!')
        .max(20, 'Too long!')
        .required('Required'),
});

function ContactForm({ setContacts }) {
    const handleSubmit = (values, actions) => {
        const newContact = {
            id: nanoid(),
            name: values.name,
            number: values.number,
        };

        setContacts(prev => [...prev, newContact]);
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={{ name: '', number: '' }}
            validationSchema={schema}
            onSubmit={handleSubmit}
        >
            <Form className="form">
                <label>
                    Name
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" component="div" className="error" />
                </label>
                <label>
                    Number
                    <Field name="number" type="text" />
                    <ErrorMessage name="number" component="div" className="error" />
                </label>
                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    );
}

export default ContactForm;
