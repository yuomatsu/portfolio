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

export const CertificationTable: VFC = memo(() => {
    return (
<Table variant='simple'>
    <Thead>
        <Tr>
            <Th>資格名</Th>
            <Th isNumeric>取得日</Th>
        </Tr>
    </Thead>
    <Tbody>
        <Tr>
            <Td>inches</Td>
            <Td isNumeric>25.4</Td>
        </Tr>
    </Tbody>
    <Tfoot>
        <Tr>
            <Th>To convert</Th>
            <Th isNumeric>multiply by</Th>
        </Tr>
    </Tfoot>
</Table>
    );
}) 