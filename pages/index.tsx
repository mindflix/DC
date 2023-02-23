import { Layout, Intro } from '@components/common'
import { Hero } from '@components/ui'

export async function getStaticProps() {
  const categories = [
    {
      id: 'account',
      name: 'Profil',
      slug: 'account',
      path: '/account',
    },
    {
      id: 'contracts',
      name: 'Contrats',
      slug: 'contracts',
      path: '/contracts',
    },
    {
      id: 'config',
      name: 'Paramètres',
      slug: 'config',
      path: '/config',
    },
  ]
  return { props: { categories }, revalidate: 60 }
}

export default function Home() {
  return (
    <>
      <div className="w-full inset-0 overflow-hidden">
        <iframe
          className="w-full"
          style={{ height: '56.25vw' }}
          src="https://player.vimeo.com/video/774795708?background=1"
        />
      </div>
      <Intro />
      <Hero
        headline="Agence web experte en développement JavaScript"
        description="Misez sur notre expertise et notre efficacité afin de valoriser votre potentiel et vous apporter des solutions à vos objectifs business. Des ingénieurs qualifiés au cœur de vos projets."
      />
    </>
  )
}

Home.Layout = Layout
