import React, {useState} from 'react';
import {Box} from "@mui/system";
import {Pagination, Typography} from "@mui/material";
import {MetaData} from "../../models/Pagination";

interface Props{
    metaData:MetaData;
    onPageChange:(page:number) => void;
}

const AppPagination = ({metaData,onPageChange}:Props) => {
    const {currentPage,totalCount,totalPages,pageSize} = metaData;
    const [pageNumber,setPageNumber] = useState(currentPage);
    const handlePageChange = (page:number) => {
      setPageNumber(page);
      onPageChange(page);
    }
    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Typography>
                Displaying {(currentPage-1)*pageSize+1} - {currentPage*pageSize} of {totalCount} items
            </Typography>
            <Pagination count={totalPages}
                        color="secondary"
                        page={pageNumber}
                        onChange={(e,page)=>handlePageChange(page)}

            />
        </Box>
    );
};

export default AppPagination;
