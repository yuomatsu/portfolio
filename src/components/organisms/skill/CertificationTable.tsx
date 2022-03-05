import { memo, ReactNode, VFC } from "react";
import { Box, Image, Stack, Text,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,} from "@chakra-ui/react";

import { CertificationList } from "../../data/skill/Certification";

export const CertificationTable: VFC = memo(() => {
    const { Certifications } = CertificationList(); 
    return (
        <Table variant='simple' backgroundColor="#fff">
            <Thead>
                <Tr fontSize={{ base: '1.0rem', md: "1.5rem"}}>
                    <Th>資格名</Th>
                    <Th isNumeric>取得日</Th>
                </Tr>
            </Thead>
            {Certifications.map((Certification) => (
            <Tbody>
                <Tr>
                    <Td>{Certification.name}</Td>
                    <Td isNumeric>{Certification.day}</Td>
                </Tr>
            </Tbody>
            ))}
        </Table>
);
}) 