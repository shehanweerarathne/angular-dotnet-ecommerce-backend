import React from 'react';
import {Box} from "@mui/system";
import {Pagination, Typography} from "@mui/material";
import {MetaData} from "../../models/Pagination";

interface Props{
    metaData:MetaData;
    onPageChange:(page:number) => void;
}

const AppPagination = ({metaData,onPageChange}:Props) => {
    const {currentPage,totalCount,totalPages,pageSize} = metaData;
    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Typography>
                Displaying {(currentPage-1)*pageSize+1} - {currentPage*pageSize} of {totalCount} items
            </Typography>
            <Pagination count={totalPages}
                        color="secondary"
                        page={currentPage}
                        onChange={(e,page)=>onPageChange(page)}

            />
        </Box>
    );
};

export default AppPagination;
