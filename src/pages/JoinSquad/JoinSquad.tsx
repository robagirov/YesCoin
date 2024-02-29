import { ActionButton, PageTitle, SecondLayout, LayoutContent } from 'shared/ui'
import styles from './styles.module.scss'

export const JoinSquad = () => {
  return (
    <SecondLayout>
      <LayoutContent>
        <div className="flex justify-center mb-12">
          <div className="w-24 h-24 rounded-xl bg-[rgb(243,243,245,0.1)]" />

          <div className="relative w-24 h-24 rounded-full bg-[rgb(243,243,245,0.1)] -left-6" />
        </div>

        <PageTitle title="Присоединиться к Арнольд Криптовалютный Squad" className="mb-72" />

        <div className={styles.additional}>
          <div>Твой фарминг монет увеличивает счет сквада в лидерборде</div>
          <div>Скажи Yes новым друзьям и совместному фармингу</div>
        </div>

        <ActionButton variant="primary" onClick={() => false} message="Присоединиться" />
      </LayoutContent>
    </SecondLayout>
  )
}
