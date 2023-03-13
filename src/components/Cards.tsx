import React from 'react'
import {Card, Heading, CardBody, Text, Button, CardFooter, Image, Stack } from '@chakra-ui/react'
import { ArrowRightIcon, EditIcon } from '@chakra-ui/icons'
import * as api from '../../src/pages/api/Url_Api'
import Link from 'next/link'
import DeleteConf from './DeleteConf'

export default function Cards({post}) {
  return (
    <Card size="lg" direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
    <Image
      objectFit='cover'
      maxW={{ base: '100%', sm: '200px' }}
      src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
      alt='Caffe Latte'
    />
  
    <Stack>
      <CardBody>
        <Heading size='md'>{post.title}</Heading>
        <Text py='2'>
          {post.body}
        </Text>
      </CardBody>
  
      <CardFooter>
        <Link href={`/post/${post.id}`}>
          <Button variant='solid' colorScheme='purple' mr={5}>
            <ArrowRightIcon mr={5}/>
            More
          </Button>
        </Link>

        <Link href={`/post/form/${post.id}`}>
          <Button variant='solid' colorScheme='yellow' mr={5}>
            <EditIcon mr={5}/>
            Update
          </Button>
        </Link>

        <DeleteConf onDelete={() => api.deletePost(post.id)}/>
        
      </CardFooter>
    </Stack>
  </Card>    
  )
}
