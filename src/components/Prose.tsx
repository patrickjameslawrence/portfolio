import joinClassNames from '../library/joinClassNames'

export function Prose({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={joinClassNames(className ?? '', 'prose dark:prose-invert')}
      {...props}
    />
  )
}
