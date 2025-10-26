import IntegrationSingle from '@/components/integration-single';
import { cards } from '@/data/integration';

type Props = {
  params: { id: string };
}

export default function IntegrationDetail({ params }: Props) {
  const id = Number(params.id);
  const item = cards.find((c) => c.id === id);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Integration not found.</p>
      </div>
    );
  }

  return (
    <IntegrationSingle
      image={item.image}
      imageApp={item.imageApp}
      title={item.title}
      text={item.text}
      textOne={item.textThree}
      textTwo={item.textTwo}
      textThree={item.textThree}
      textFour={item.textFour}
    />
  );
}
