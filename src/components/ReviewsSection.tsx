
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Анна Петрова",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120&q=80",
    quote: "Сын был в восторге! Каждый день рассказывал, чем они занимались. Особенно понравились спортивные игры и компьютерные занятия. Обязательно придем к вам снова следующим летом!",
    role: "Мама Миши, 9 лет"
  },
  {
    id: 2,
    name: "Сергей Иванов",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120&q=80",
    quote: "Дочь ходила в ваш лагерь две смены подряд и не хотела уходить. Прекрасные воспитатели, интересная программа, разнообразное питание. Ребенок счастлив, а значит и родители тоже!",
    role: "Папа Кати, 11 лет"
  },
  {
    id: 3,
    name: "Елена Соколова",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120&q=80",
    quote: "Очень благодарна вашему лагерю! Ребенок не только отлично провел время, но и приобрел новые навыки, нашел друзей. Отдельное спасибо за фотоотчеты каждый день - было приятно видеть, как дети проводят время.",
    role: "Мама Артема, 8 лет"
  },
  {
    id: 4,
    name: "Дмитрий Кузнецов",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120&q=80",
    quote: "Сыну 13 лет, и найти что-то интересное для подростка непросто. Но ваш лагерь его действительно увлек! Особенно понравились командные проекты и спортивные соревнования. Ребенок доволен, а это главное!",
    role: "Отец Кирилла, 13 лет"
  },
  {
    id: 5,
    name: "Марина Сидорова",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120&q=80",
    quote: "Спасибо за незабываемое лето! Дочка каждый день бежала в лагерь с удовольствием. Ваши педагоги смогли найти подход к каждому ребенку, а разнообразие занятий просто впечатляет.",
    role: "Мама Алисы, 10 лет"
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="reviews">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Отзывы родителей</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Что говорят родители о нашем лагере
          </p>
          <div className="w-20 h-1 bg-purple-500 mx-auto mt-4"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-6">
                  <div className="h-full p-8 bg-white rounded-xl shadow-md flex flex-col transition-shadow duration-300 hover:shadow-lg">
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-purple-200"
                      />
                      <div>
                        <h3 className="font-medium text-lg text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6 flex-grow">
                      <Icon name="Quote" className="h-8 w-8 text-purple-300 mb-3" />
                      <p className="text-gray-600 italic">{testimonial.quote}</p>
                    </div>
                    
                    <div className="flex text-yellow-400">
                      <Icon name="Star" className="h-5 w-5 fill-current" />
                      <Icon name="Star" className="h-5 w-5 fill-current" />
                      <Icon name="Star" className="h-5 w-5 fill-current" />
                      <Icon name="Star" className="h-5 w-5 fill-current" />
                      <Icon name="Star" className="h-5 w-5 fill-current" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-10">
              <CarouselPrevious className="relative static left-0 right-auto translate-y-0 mr-2 bg-purple-600 text-white border-purple-600 hover:bg-purple-700 hover:border-purple-700" />
              <CarouselNext className="relative static right-0 left-auto translate-y-0 bg-purple-600 text-white border-purple-600 hover:bg-purple-700 hover:border-purple-700" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
