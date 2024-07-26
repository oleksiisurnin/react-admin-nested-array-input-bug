// in src/components/AdminApp.tsx
"use client"; // remove this line if you choose Pages Router
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";

import { UserEdit } from "./UserEdit";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const AdminApp = () => (
    <Admin dataProvider={dataProvider}>
        <Resource
            name="users"
            list={ListGuesser}
            edit={UserEdit}
            recordRepresentation="name"
        />
    </Admin>
);

export default AdminApp;