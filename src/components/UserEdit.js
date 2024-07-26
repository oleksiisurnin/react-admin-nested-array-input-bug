import React from 'react';
import { Edit, TextInput, SimpleForm, ArrayInput, SimpleFormIterator, FormDataConsumer } from 'react-admin';

export function UserEdit() {
    return (
        <Edit>
            <SimpleForm>

            <ArrayInput source="array_in_array">
                <SimpleFormIterator inline>
                    <ArrayInput>
                        <SimpleFormIterator inline>
                            <TextInput source='name' />
                            <FormDataConsumer>
                                {({ formData }) => {
                                    console.log(formData);

                                    return null;
                                }}
                            </FormDataConsumer>
                        </SimpleFormIterator>
                    </ArrayInput>
                </SimpleFormIterator>
            </ArrayInput>
            </SimpleForm>
        </Edit>
    )
} 