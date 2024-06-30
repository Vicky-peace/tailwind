import HeaderImg from './assets/image-omelette.jpeg'
import './App.css'

function App() {


  return (
    <>
    <div className="container mx-auto bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg border-gray-200">
      <img src={HeaderImg} alt="header img" className='rounded-lg shadow-lg'/>
      <div className="container mx-auto p-6 bg-white">
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4  sm:text-left'>Simple Omelette Recipe</h1>
        <p className='text-lg text-gray-600 leading-relaxed mb-4 text-center sm:text-left'>An easy and quick dish, perfect for any meal.This classic omelette combines beaten eggscokked to perfection, optionally filled with your choice of cheese, vegetables, or meats</p>
      </div>
      <div className="mx-auto p-5 bg-pink-100 rounded-lg mb-4">
        <h3 className='text-lg font-semibold text-gray-800 mb-3 sm:text-left'>Preparation time</h3>
        <ul className='list-disc pl-5 space-y-2 text-center sm:text-left'>
          <li><span className='font-semibold'>Total:</span>Approximately 10 minutes</li>
          <li><span className='font-semibold'>Preparation:</span>5 minutes</li>
          <li><span className='font-semibold'>Cooking:</span>5 minutes</li>
        </ul>
      </div>
      <div className="mx-auto bg-white mb-4">
        <h3 className='text-lg font-semibold text-gray-800 mb-3 sm:text-left'>Ingredients</h3>
        <ul className='list-disc pl-5 space-y-2 text-center sm:text-left'>
          <li>2 large eggs</li>
          <li>1/4 cup milk</li>
          <li>1/4 tsp salt</li>
          <li>1/8 tsp black pepper</li>
          <li>1 tbsp butter</li>
        </ul>
      </div>
      <div className="max-w-4xl mx-auto p-4">
        <h3 className='text-lg font-semibold text-gray-800 mb-3 sm:text-left'>Instructions</h3>
        <ol className='list-decimal space-y-2 mb-3 pl-5 sm:pl-0 sm:text-left'>
          <li className='text-gray-800 text-base leading-loose'>Whisk together eggs, milk, salt, and pepper in a small bowl until well combined.</li>
          <li  className='text-gray-800 text-base leading-loose'>Melt butter in a small nonstick skillet over medium heat. Pour in egg mixture.</li>
          <li  className='text-gray-800 text-base leading-loose'>As eggs begin to set, gently pull the eggs across the pan with a spatula, forming large soft curds.</li>
          <li  className='text-gray-800 text-base leading-loose'>Continue cooking - pulling, lifting, and folding eggs - until thickened and no visible liquid egg remains.</li>
          <li  className='text-gray-800 text-base leading-loose'>Remove from heat. Serve immediately.</li>
        </ol>
      </div>
      <div className="bg-white p-5 shadow-md">
        <h3 className='text-xl font-semibold mb-2'>Nutrition</h3>
        <p className='mb-4 text-sm text-gray-600'>The table below shows nutritional values per serving without additional fillings</p>
        <table className='min-w-full table-auto'>
          <thead className='bg-gray-100'>
            <tr>
              <th className='text-left font-semibold p-2'>Calories</th>
              <th  className='text-left font-semibold p-2'>Fat</th>
              <th  className='text-left font-semibold p-2'>Carbs</th>
              <th  className='text-left font-semibold p-2'>Protein</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='p-2'>190kcal</td>
              <td className='p-2'>15g</td>
              <td className='p-2'>1g</td>
              <td className='p-2'>13g</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default App
