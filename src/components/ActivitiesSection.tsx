
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ActivitiesSection = () => {
  return (
    <section className="py-20 bg-white" id="activities">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Что ждет детей в лагере</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Разнообразная программа мероприятий, которая понравится каждому ребенку
          </p>
          <div className="w-20 h-1 bg-purple-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02] group">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80" 
                alt="Дети за компьютерами" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6 bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <Icon name="Laptop" className="mr-2 h-5 w-5 text-purple-500" />
                Цифровые навыки
              </h3>
              <p className="text-gray-600">
                Современные образовательные программы, где дети в игровой форме осваивают цифровые технологии, 
                учатся основам программирования и создают собственные проекты.
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02] group">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1472162072942-cd5147eb3902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80" 
                alt="Активные игры на улице" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6 bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <Icon name="Dumbbell" className="mr-2 h-5 w-5 text-purple-500" />
                Спортивные активности
              </h3>
              <p className="text-gray-600">
                Ежедневные активные игры на свежем воздухе, командные соревнования и 
                спортивные мероприятия для поддержания физической активности и здоровья.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02] group">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1535572290543-960a8046f5af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80" 
                alt="Настольные игры" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6 bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <Icon name="PuzzlePiece" className="mr-2 h-5 w-5 text-purple-500" />
                Настольные игры
              </h3>
              <p className="text-gray-600">
                Большая коллекция современных настольных игр для развития логики, стратегического 
                мышления и командной работы в увлекательном формате.
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02] group">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80" 
                alt="Питание в кафе" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6 bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <Icon name="UtensilsCrossed" className="mr-2 h-5 w-5 text-purple-500" />
                Здоровое питание
              </h3>
              <p className="text-gray-600">
                Полноценное трехразовое питание в уютном кафе с разнообразным меню, 
                разработанным профессиональными диетологами специально для детей.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Button 
            size="lg" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg h-auto shadow-lg transition-all hover:translate-y-[-2px]"
          >
            Оставить заявку <Icon name="Send" className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
