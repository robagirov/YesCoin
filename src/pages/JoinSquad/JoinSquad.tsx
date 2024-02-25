import { ActionButton, GlowCircle, PageTitle, Layout } from 'shared/ui'

export const JoinSquad = () => {
  return (
    <Layout>
      <Layout.Content>
        <div className="flex justify-center mb-12">
          <div className="w-24 h-24 rounded-xl bg-[rgb(243,243,245,0.1)]" />

          <div className="relative w-24 h-24 rounded-full bg-[rgb(243,243,245,0.1)] -left-6" />
        </div>

        <PageTitle title="Присоединиться к Арнольд Криптовалютный Squad" className="mb-72" />

        <ActionButton variant="primary" onClick={() => false} message="Присоединиться" />
      </Layout.Content>

      <GlowCircle position="bottom" className="opacity-50" />
    </Layout>
  )
}
