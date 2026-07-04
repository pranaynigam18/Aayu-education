import { stats } from "@/lib/data";
import { Container } from "@/components/ui/Container";

export function Stats() {
  return (
    <section aria-label="Key statistics" className="relative z-10 -mt-6 sm:-mt-8">
      <Container>
        <ul className="grid grid-cols-2 gap-3 rounded-2xl border border-neutral-200/80 bg-white/90 p-5 shadow-xl shadow-primary-900/5 backdrop-blur-md sm:grid-cols-4 sm:gap-4 sm:p-6 lg:p-7">
          {stats.map((stat, index) => (
            <li
              key={stat.label}
              className={`text-center ${index < stats.length - 1 ? "sm:border-r sm:border-neutral-100" : ""}`}
            >
              <p className="text-xl font-bold text-primary-700 sm:text-2xl lg:text-3xl">
                {stat.value}
              </p>
              <p className="mt-0.5 text-[11px] font-medium text-neutral-500 sm:text-xs">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
