import random
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Initialize WebDriver
driver = webdriver.Chrome()

try:
    # Open the target page
    driver.get("https://torontomu.primo.exlibrisgroup.com/discovery/search?query=any,contains,Meta%20Physics&tab=OCULDiscoveryNetwork&search_scope=OCULDiscoveryNetwork&vid=01OCUL_TMU:01OCUL_TMU&offset=0")

    # Wait until the clickable elements are present
    clickable_links = WebDriverWait(driver, 10).until(
        EC.presence_of_all_elements_located((By.XPATH, '//*[@id="facets"]/prm-facet/div[1]/div/div[5]/prm-facet-group/div/prm-facet-exact/div/div/*/div/strong/span[1]'))
    )

    # Ensure clickable links exist
    if clickable_links:

        for index, link in enumerate(clickable_links, start=1):
            print(f"Link {index}: {link.text} - URL: {link.get_attribute('href')}")

        # Select a random link
        random_link = random.choice(clickable_links)

        print(f"Random Link Text: {random_link.text}, URL: {random_link.get_attribute('href')}")

        # Click the selected link
        random_link.click()
        print("Random link clicked.")

    else:
        print("No clickable links found.")

finally:
    # End the webdriver session
    input('Press enter to end session...')
    driver.quit()