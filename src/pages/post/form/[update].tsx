import { Button, FormControl, FormErrorMessage, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as api from '../../api/Url_Api'
import * as alert from '../../../components/modules/alert'
import Link from "next/link";

type Inputs = {
  userId: number,
  title: string,
  body: string,
};

export default function Update() {
    const [data, setData] = useState([])
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const router = useRouter()
  const {update} = router.query

  const onSubmit: SubmitHandler<Inputs> = (data) => {

      api.updatePost(update, data)
      alert.alertSuccess()
      router.push('/post')
  }

  useEffect(() => {
    const FetchData = async () => {
        const response = await api.fetchPostById(update)
        const res = response?.data
        setData(res)
    }
    FetchData()
}, [update])


  return (

    <div className="main">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Input defaultValue={1} {...register("userId")} hidden />
        </FormControl>

        <FormControl isInvalid={errors.title ? true : false}>
          <FormLabel>Title</FormLabel>
          <Input defaultValue={data.title} {...register("title", { required: true})} placeholder="title"/>
          {errors.title && <FormErrorMessage>Title wajib di isi</FormErrorMessage>}
        </FormControl>

        <FormControl mt={5} isInvalid={errors.title ? true : false}>
          <FormLabel>Body</FormLabel>
          <Textarea defaultValue={data.body} {...register("body", { required: true})} placeholder="body" />
          {errors.body && <FormErrorMessage>Body wajib di isi</FormErrorMessage>}
        </FormControl>

        <Button mt={5} mr={5} variant='solid' colorScheme='green' type="submit">Save</Button>
        <Link href="/post"><Button mt={5} variant='solid' colorScheme='gray'>Close</Button></Link>
      </form>
    </div>
  );
}