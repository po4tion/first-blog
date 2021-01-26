import Post from './models/post.js';

export default function createFakeData() {
  const posts = [...Array(40).keys()].map((i) => ({
    title: `포스트#${i}`,
    body:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, impedit. Omnis consequuntur similique minus explicabo porro unde odit dolore, quam doloribus cupiditate aut non id beatae, quae, tenetur error eveniet possimus alias ab hic. Consequatur reiciendis corporis est ratione error necessitatibus sapiente quisquam, voluptas doloribus. Consequuntur veritatis aliquam laudantium molestiae reprehenderit repellat vitae nostrum distinctio saepe, in architecto voluptatibus perferendis accusantium sapiente? Libero, dolores? Perspiciatis beatae omnis ad et expedita optio ipsam nam. A vero dolore, consequatur inventore, optio, corporis aperiam delectus unde sint dolor rerum sequi quo? Earum, vel! Natus eveniet eos explicabo voluptatibus reiciendis atque possimus, illo quo sunt magnam exercitationem harum reprehenderit. Officia quos at adipisci atque exercitationem ex repellat pariatur labore tempore et provident commodi praesentium est, consequuntur mollitia hic cumque minima! Qui, laboriosam minus autem, porro maiores assumenda ipsam quod nobis odio earum nulla! Repudiandae quod, modi amet facere debitis, incidunt corporis sunt nostrum qui cupiditate illum magni eum accusantium nemo quaerat enim tempora. Odio nisi adipisci rem earum eum! Explicabo ducimus velit facilis nam, debitis ipsam repellendus eius dolorem in, repellat earum similique maiores voluptate eum nihil pariatur tempore nesciunt ad adipisci harum iste magni nisi, maxime soluta. Dolor, voluptatem! Delectus quibusdam esse quam?',
    tags: ['가짜', '데이터'],
  }));

  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
}
