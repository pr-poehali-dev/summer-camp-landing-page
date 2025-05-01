
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
];

const ReviewsSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="reviews">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Отзывы родителей</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
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
                  <div className="h-full p-6 bg-white rounded-xl shadow-md flex flex-col">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4 flex-grow">
                      <Icon name="Quote" className="h-6 w-6 text-purple-400 mb-2" />
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
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static left-0 right-auto translate-y-0 mr-2" />
              <CarouselNext className="relative static right-0 left-auto translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
