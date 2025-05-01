
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1472162072942-cd5147eb3902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80" 
          alt="Счастливые дети в летнем лагере" 
          className="w-full h-full object-cover brightness-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-gray-900/60" />
      </div>

      <div className="container relative z-10 mx-auto text-center text-white">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="bg-white p-4 rounded-full shadow-lg">
            <img 
              src="/logo-b.svg" 
              alt="Логотип лагеря" 
              className="h-16 sm:h-20"
            />
          </div>
        </div>

        {/* Hero Text */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-shadow-sm">
          Летний городской лагерь
        </h1>
        <p className="text-xl sm:text-2xl mb-6 max-w-2xl mx-auto text-shadow-sm">
          Незабываемое лето для детей от 7 до 14 лет, наполненное яркими впечатлениями, 
          новыми друзьями и интересными занятиями
        </p>
        
        {/* CTA Button */}
        <Button 
          size="lg" 
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg h-auto"
        >
          Оставить заявку <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
