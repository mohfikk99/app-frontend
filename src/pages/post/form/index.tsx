import { Button, FormControl, FormErrorMessage, FormLabel, Input, Textarea } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import * as api from '../../api/Url_Api'
import * as alert from '../../../components/modules/alert'

type Inputs = {
  userId: number,
  title: string,
  body: string,
};

export default function Create() {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const router = useRouter()

  const onSubmit: SubmitHandler<Inputs> = (data) => {

      api.createPost(data)
      alert.alertSuccess()
      router.push('/post')
  }

  return (
    <div className="main">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Input defaultValue={1} {...register("userId")} hidden />
        </FormControl>

        <FormControl isInvalid={errors.title ? true : false}>
          <FormLabel>Title</FormLabel>
          <Input {...register("title", { required: true})} placeholder="title"/>
          {errors.title && <FormErrorMessage>Title wajib di isi</FormErrorMessage>}
        </FormControl>

        <FormControl mt={5} isInvalid={errors.title ? true : false}>
          <FormLabel>Body</FormLabel>
          <Textarea {...register("body", { required: true})} placeholder="body" />
          {errors.body && <FormErrorMessage>Body wajib di isi</FormErrorMessage>}
        </FormControl>

        <Button mt={5} mr={5} variant='solid' colorScheme='green' type="submit">Save</Button>
        <Link href="/post"><Button mt={5} variant='solid' colorScheme='gray'>Close</Button></Link>
        
      </form>
    </div>
  );
}