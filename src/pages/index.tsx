import type { NextPage } from 'next'
import Title from '../ui/components/title/Title'
import List from './../ui/components/list/List';
import { Photo } from './../ui/components/list/List.style';


const Home: NextPage = () => {
  return (
    <div>
      <Title
        title=""
        subtitulo={
          <span>
            Com um pequeno valor mensal, você <br />
            pode <strong>adotar um pet virtualmente.</strong>
          </span>
        } />
        <List
          pets={[
            {
              id:1,
              name:'Bidu',
              history: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum pellentesque metus, a scelerisque felis tempus scelerisque. In sagittis lectus nulla, vel elementum sem bibendum vitae. Ut quis interdum ante.',
              photo: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg'
            },
            {
              id:2,
              name:'Jujuba',
              history:'In sagittis lectus nulla, vel elementum sem bibendum vitae. Ut quis interdum ante. Nulla vulputate, mi nec interdum egestas, tortor dui imperdiet justo, non iaculis enim ex a nibh.',
              photo: 'https://tractive.com/blog/wp-content/uploads/2020/10/header_image_cat_in_heat-768x576.jpg'
            },
            {
              id:3,
              name:'Xuxu',
              history:' Aliquam porttitor nec lacus eu iaculis. Vestibulum consectetur cursus interdum. Integer quis egestas tellus. ',
              photo: 'https://www.pasadenastarnews.com/wp-content/uploads/2021/05/PAS-L-COL-PHS-0526-01.jpeg'
            }
          ]}
        />
    </div>
  )
}

export default Home
