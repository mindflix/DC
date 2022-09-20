import { Layout } from '@components/common'
import { Button, Checkbox, Container, Grid, Input, Text } from '@components/ui'
import { useForm } from 'react-hook-form'

export default function Contact() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      checkbox: [],
    },
  })
  return (
    <Container className="mt-4 mb-10 sm:mt-10">
      <Text className="text-center" variant="heading">
        Que voulez-vous faire ?
      </Text>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Grid className="mt-8" variant="filled" layout="normal">
          <Checkbox
            {...register('checkbox')}
            value="application"
            label="Application"
          />
          <Checkbox
            {...register('checkbox')}
            value="site-web"
            label="Site Web"
          />
          <Checkbox
            {...register('checkbox')}
            value="referencement"
            label="Référencement"
          />
          <Checkbox
            {...register('checkbox')}
            value="web-design"
            label="Web Design"
          />
          <Checkbox
            {...register('checkbox')}
            value="site-e-commerce"
            label="Site E-commerce"
          />
          <Checkbox
            {...register('checkbox')}
            value="i-a"
            label="Intelligence Artificielle"
          />
        </Grid>
        <div className="mt-8 mx-auto grid gap-4 lg:grid-cols-2 lg:w-2/3">
          <Input
            {...register('email', { required: true })}
            label="email"
            placeholder="Email"
          />
          <Button type="submit" variant="slide">
            Envoyer la requête
          </Button>
        </div>
      </form>
    </Container>
  )
}

Contact.Layout = Layout
