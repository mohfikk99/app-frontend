import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import * as api from '../api/Url_Api'
import Cards from '@/components/Cards'
import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import Link from 'next/link'

export default function Detail() {
    const [data, setData] = useState([])

    const router = useRouter()
    const {detail} = router.query


    useEffect(() => {
        const FetchData = async () => {
            const response = await api.fetchPostById(detail)
            const res = response?.data
            setData(res)
        }
        FetchData()
    }, [detail])
    
  return (
    <div className='section'>
      <Card size="lg" direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
          alt='Caffe Latte'
        />
      
        <Stack>
          <CardBody>
            <Heading size='md'>{data.title}</Heading>
            <Text py='2'>
              {data.body}
            </Text>
          </CardBody>
      
          <CardFooter>
            <Link href="/post">
              <Button variant='solid' colorScheme='gray' mr={5}>
                <ArrowLeftIcon mr={5}/>
                Close
              </Button>
            </Link>
          </CardFooter>
        </Stack>
      </Card>    
    </div>
  )
}
