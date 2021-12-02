import React from "react"
import { EmployeesList } from "../../components/owner/EmployeesList"
import { Text } from "@chakra-ui/layout"

export const Employees = () => {
    return (
        <>
            {console.log("staff")}
            <p style={{fontSize: "50px", marginLeft: "15px"}}><b>Staff!</b></p>
            <EmployeesList></EmployeesList>
        </>
    )
}