export interface PostI {
  id: string;
  header: {
    title: string;
    description: string;
    image: string;
  };
  author: string;
  body: string;
  reactions: {
    likes: number;
    dislikes: number;
  };
}

export const DUMMY_POSTS: PostI[] = [
  {
    id: "1",
    header: {
      title: "New York City: The City that Never Sleeps",
      description:
        "New York is a city in the United States of America. It is the most populous city in the United States.",
      image:
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixid=MnwzODU2NTF8MHwxfHNlYXJjaHw2fHxOZXclMjBZb3J8ZW58MHx8fHwxNjcwMjUzMzMw&ixlib=rb-4.0.3",
    },
    author: "Batuhan Bilgin",
    body: `<p>New York City, also known as the Big Apple, is one of the most vibrant and dynamic cities in the world. It is home to iconic landmarks, world-renowned museums, cultural diversity, and an unmatched energy that has earned it the nickname, "The City that Never Sleeps."</p>
  <h2>Iconic Landmarks</h2>
  <p>When most people think of New York City, the first thing that comes to mind is the Statue of Liberty. This iconic statue, located on Liberty Island in New York Harbor, was a gift from France to the United States in 1886. Visitors can take a ferry to the island and climb to the top of the statue for amazing views of the city skyline.</p>
  <p>Another famous landmark is the Empire State Building, which towers over Midtown Manhattan at 1,454 feet. Visitors can take an elevator to the observation deck on the 86th floor for stunning views of the city.</p>
  <p>The Brooklyn Bridge is another iconic landmark that is worth a visit. This suspension bridge, completed in 1883, connects Manhattan and Brooklyn and is one of the oldest and most recognizable bridges in the United States.</p>
  <h2>World-Renowned Museums</h2>
  <p>New York City is home to some of the world's most famous museums. The Metropolitan Museum of Art, also known as The Met, is one of the largest and most comprehensive art museums in the world. It houses over two million works of art from around the globe, ranging from ancient artifacts to contemporary art.</p>
  <p>The American Museum of Natural History is another must-see museum in New York City. It is one of the largest and most comprehensive natural history museums in the world, with exhibits on everything from dinosaurs to space exploration.</p>
  <h2>Cultural Diversity</h2>
  <p>New York City is known for its cultural diversity, with over 200 languages spoken and people from all over the world living and working together. This diversity is reflected in the city's cuisine, which ranges from traditional American fare to international cuisine from all over the world.</p>
  <p>One of the best places to experience this diversity is in Queens, which is known as the most diverse borough in the city. Visitors can try everything from Mexican street food to Chinese dumplings to Caribbean jerk chicken.</p>
  <h2>Energy</h2>
  <p>New York City is a city that never sleeps, with an energy that is unmatched. Times Square, located in the heart of Midtown Manhattan, is a prime example of this energy. The bright lights, billboards, and crowds make it one of the busiest and most vibrant areas in the city.</p>
  <p>Another place to experience the city's energy is in Central Park. This 843-acre park, located in the middle of Manhattan, is a haven for joggers, picnickers, and nature lovers. It's a great place to escape the hustle and bustle of the city and enjoy some peace and quiet.</p>
  <h2>Conclusion</h2>
  <p>In conclusion, New York City is a city like no other. From iconic landmarks to world-renowned museums to cultural diversity to unmatched energy, it has something for everyone. So, whether you're a first-time visitor or a seasoned New Yorker, there's always something new to discover in this amazing city.</p>`,
    reactions: {
      likes: 0,
      dislikes: 0,
    },
  },
];
