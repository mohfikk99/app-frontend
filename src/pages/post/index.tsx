import React, { useEffect, useState } from 'react'
import { Box, Button, SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react'
import * as api from '../api/Url_Api'
import Cards from '@/components/Cards'
import Link from 'next/link'
import { AddIcon } from '@chakra-ui/icons'

export default function Post () {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const FetchData = async () => {
            const response = await api.fetchPost()
            const res = response?.data
            setData(res)
            setLoading(res ? false : true)

        }
        FetchData()
    }, [])
    
    
  return (
    <>
  
    <div className='section'>

        <div className='button-add' >
            <Button colorScheme='teal' variant='solid'>
                <AddIcon h={8} mr={5}/>
                <Link href="/post/form">Tambahkan Postingan</Link>
            </Button>
        </div>
        {data.map((item) => (
        <div className='cards'>
            {loading === true ? (
                <Box padding='6' boxShadow='lg' bg='white'>
                    <SkeletonCircle size='20' />
                    <Stack>
                        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                    </Stack>
                </Box>
            ) : (
                <Cards post={item} key={item.id}/>
            )}
        </div>
        ))}
        
    </div>
    
    </>
  )
}
