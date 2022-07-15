import Image from 'next/image'
import type { FC } from 'react'

import doggo from '../../../../fixtures/assets/doggo.webp'

export const ArticleComponent: FC = () => (
  <article>
    <Image
      src={doggo}
      width="272px"
      height="244px"
      alt="cute dog"
      objectFit="cover"
      //   layout="fill"
      //   objectPosition="right"
      placeholder="blur"
      priority
    />
    <section>
      <h2>Dachshund Dog Breed Facts & Information</h2>
      <div>
        John Newmann <span>&nbsp;&bull;</span> 12/7/2022
      </div>
      <p>
        https://www.rover.com/blog/breeds/dachshund/ Clever, lively, courageous,
        entertaining: that’s the Dachshund. The Dachshund’s name comes from the
        German words for badger (dachs) and dog (hund), but you might know the
        Dachshund more informally as a doxie, wiener dog, hot dog, sausage dog,
        or badger dog. Dachshunds were originally bred in 15th century Germany
        to hunt badgers. This dog breed’s long back and short legs made them
        ideal hunting dogs for scenting, chasing, and flushing out small animals
        and burrow-dwelling creatures.
      </p>
      <div>
        <span>Read whole article</span>
        <span>0 Comments</span>
      </div>
    </section>
  </article>
)
